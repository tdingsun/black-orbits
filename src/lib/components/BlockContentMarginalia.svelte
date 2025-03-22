<script lang="ts">
	import { getImgUrl } from "$lib/sanity";

    let { portableText } = $props();
    console.log(portableText)
</script>
<span class="group underline">
    {portableText.plainTextContent}<div class="group-hover:block hidden absolute left-0 w-[calc(50dvw-18rem)] p-4">
        <img src={getImgUrl(portableText.value.image)} alt=''/>
    </div>
</span>