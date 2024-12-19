<template>
  <div
    class="text-xs fixed bottom-0 bg-primary w-full text-white py-1 tracking-wider md:px-20 px-10 flex justify-between items-center">
    <p><span class="font-bold">Developed by:</span> KinWebb</p>
    <p class="italic">version {{ version }}.{{ commits }}.{{ branchCount }} ({{ branch }})</p>
    <div class="hidden md:horizontal gap-3">
      <NuxtLink target="_blank" v-for="icon in icons" :to="icon.link"
        class="*:w-auto *:h-5 *:cursor-pointer *:hover:text-slate-300">
        <Icon :name="icon.name" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const icons = [
  {
    name: 'github',
    link: 'https://github.com/KJLEscoto'
  },
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/kent-joemar-escoto-646b92265/'
  },
  {
    name: 'facebook',
    link: 'https://www.facebook.com/kentoy.newt'
  }
]

const version = ref(1); // Replace with your major version.
const commits = ref(0); // Default commits value.
const branch = ref(''); // Default branch name.
const branchCount = ref(0); // Count of branches.

const getTotalCommits = async () => {
  let page = 1;
  let totalCommits = 0;
  const perPage = 100; // Maximum allowed by GitHub API per page.

  try {
    while (true) {
      const response = await fetch(
        `https://api.github.com/repos/KJLEscoto/STIFinalGradeCalculator/commits?per_page=${perPage}&page=${page}`
      );

      if (response.ok) {
        const commitData = await response.json();
        totalCommits += commitData.length;

        if (commitData.length < perPage) break; // Exit if there are no more commits.
        page++;
      } else {
        console.error('Error fetching commits:', response.status, response.statusText);
        break;
      }
    }

    commits.value = totalCommits;
  } catch (error) {
    console.error("Error fetching commits count:", error);
  }
};

const getBranchDetails = async () => {
  try {
    const response = await fetch(
      'https://api.github.com/repos/KJLEscoto/STIFinalGradeCalculator/branches'
    );

    if (response.ok) {
      const branchData = await response.json();
      branchCount.value = branchData.length; // Count of branches
      const defaultBranch = branchData.find(b => b.name === 'main' || b.name === 'master') || branchData[ 0 ];
      branch.value = defaultBranch.name;
    } else {
      console.error('Error fetching branches:', response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error fetching branch details:", error);
  }
};

onMounted(() => {
  getTotalCommits();
  getBranchDetails();
});
</script>