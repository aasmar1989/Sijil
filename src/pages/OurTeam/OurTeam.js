
import React from 'react';
import { BaseLayout } from "../../component/base/BaseLayout/BaseLayout"
import { TeamScreen } from "../../component/screens/TeamScreen/TeamScreen"
import { MembersScreen } from "../../component/screens/MembersScreen/MembersScreen"
import { ManagmentScreen } from "../../component/screens/ManagmentScreen/ManagmentScreen"
export const OurTeam = () => {

    return (
        <BaseLayout>
            <TeamScreen />
            <MembersScreen />
            <ManagmentScreen />
        </BaseLayout>
    )
}