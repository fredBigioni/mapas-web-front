// import { CurrentAccountList } from "../views/currentAccount";
import { CurrentAccountList } from "../views/currentAccount/CurrentAccountList";
import { CurrentAccount } from "../views/CurrentAccount";
import { HomePage } from "../views/homePage";
import { NothingSelectedView } from "../views/NothingSelectedView"
import { UploadFiles } from "../views/uploadFiles/UploadFiles";
import { BasicMaster } from "../views/masters/BasicMaster";
import { SetScreen } from "../views/setScreen/SetScreen";
import { Publicity } from "../views/publicity/Publicity";

export const ViewPage = ({ activeView }) => {
    // console.log(activeView.viewName)
    const viewPage = () => {

        if (!activeView || !activeView.viewName) {
            // return <HomePage />
            return <UploadFiles />
        }
        switch (activeView.viewName) {
            case "SetScreen":
                return <SetScreen />
            case "Publicity":
                return <Publicity />
            case "UploadFiles":
                return <UploadFiles />
            case "HomePage":
                // return <HomePage />
                return <UploadFiles />
            case "NothingSelectedView":
                return <NothingSelectedView />
            case "CurrentAccount":
                return <CurrentAccount />
            case "CurrentAccountList":
                return <CurrentAccountList />
            case "BasicMaster":
                return <BasicMaster parameter={activeView.parameter} />
            default:
                // return <HomePage />
                return <UploadFiles />
        }
    }

    return (
        <>
            {viewPage()}
        </>
    )
}
