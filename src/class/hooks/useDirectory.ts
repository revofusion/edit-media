import { path } from "@os/Path";
import { useConfigStore } from "@stores/config";

export const useOpenDirectory = () => {
    const configStore = useConfigStore()

    const openDirectory = async () => {
        // Open a selection dialog for directories
        const { directory, label } = await path.openDirectory()
        if (!directory) {
            return
        }
        configStore.setDirectory(directory, label)
    }

    return {
        openDirectory
    }
}