<script lang="ts">
	import BlockContent from "./BlockContent.svelte";

    let { portableText } = $props();
</script>
<span class="group underline">
    {portableText.plainTextContent}
    <div class="group-hover:block hidden absolute left-0 w-[calc(50dvw-18rem)] p-4">
        <BlockContent value={portableText.value.content}></BlockContent>
    </div>
</span>