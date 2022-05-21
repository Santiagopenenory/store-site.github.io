script>
    import {closeModal} from 'svelte-modals'

    export let isOpen

    export let title
    export let message

    let okButton = 'px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md\n' +
        ' hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0\n' +
        ' active:bg-red-800 active:shadow-lg transition duration-150 ease-in-out';

</script>

{#if isOpen}

    <div class="modal items-center justify-center fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
          tabindex="-1" aria-hidden="true">
        <div class="modal-dialog flex relative w-auto pointer-events-none">
            <div
                    class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div
                        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-xl font-medium leading-normal text-gray-800">{title}</h5>
                    <button type="button"
                            class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body relative p-4">
                    {message}
                </div>
                <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button" class="{okButton}" on:click={closeModal} data-bs-dismiss="modal">Ok</button>
                </div>
            </div>
        </div>
    </div>
{/if}