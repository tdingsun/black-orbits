<script lang="ts">
	import { onMount } from 'svelte';
	import WaveSurfer from 'wavesurfer.js';
	import StyledButton from './StyledButton.svelte';

	let { src } = $props();

	let container: HTMLDivElement;
	let playButton: HTMLElement;

	let isPlaying = $state(false);
    let totalTime = $state('0:00');
    let currentTime = $state('0:00');

	onMount(() => {
		const wavesurfer = WaveSurfer.create({
			container,
			waveColor: '#fefce8',
			progressColor: '#483C32',
            cursorColor: '#483C32',
			url: src,
			barWidth: 8,
			barGap: 2,
			barRadius: 8,
			barHeight: 0.9,
			cursorWidth: 1,
			barAlign: 'bottom',
			height: 48
		});

		wavesurfer.on('click', () => {
			wavesurfer.play();
		});

		playButton.onclick = () => {
			wavesurfer.playPause();
		};

		wavesurfer.on('play', () => {
			isPlaying = true;
		});

		/** When the audio pauses */
		wavesurfer.on('pause', () => {
			isPlaying = false;
		});

		wavesurfer.on('timeupdate', (time) => {
			currentTime = formatTime(time);
		});

        wavesurfer.on('decode', (duration) => {
            totalTime = formatTime(duration);
        })
	});

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secondsRemainder = Math.round(seconds) % 60
        const paddedSeconds = `0${secondsRemainder}`.slice(-2)
        return `${minutes}:${paddedSeconds}`
    }

</script>

<div class="flex items-center w-full gap-2">
	<button class="w-20 h-min" bind:this={playButton}>
		<StyledButton>
			{isPlaying ? 'Pause' : 'Play'}
		</StyledButton>
		</button>
	<div class="flex-grow basis-full" bind:this={container}></div>
	<div class="text-xs w-24 flex justify-end">{currentTime}&nbsp;/&nbsp;{totalTime}</div>
</div>

<!-- <audio controls>
    <source {src} type="audio/mpeg" />
</audio> -->
