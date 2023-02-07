<script lang="ts">
  import Card from '@components/base/Card.svelte';
</script>

<svelte:head>
	<title>Firebase Simple Form</title>
</svelte:head>
<div class="h-screen w-screen flex justify-center items-center p-4">
  <Card class="w-full md:w-1/2 text-center" title="Welcome to Firebase Simple Form">
    Click in some of following links to be redirected to corresponding action
    <div class="flex gap-4 justify-center items-center">
      <a href="/auth/signin" class="button-primary">Sign In</a>
      <a href="/auth/signup" class="button-secondary">Sign Up</a>
    </div>
  </Card>
</div>
