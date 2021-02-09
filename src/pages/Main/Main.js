import React from 'react';
import { BaseLayout } from "../../component/base/BaseLayout/BaseLayout"
import { FirstScreen } from "../../component/screens/FirstScreen/FirstScreen"
import { StatisticScreen } from "../../component/screens/StatisticScreen/StatisticScreen"
import { ReasonsScreen } from "../../component/screens/ReasonsScreen/ReasonsScreen"
import { OurServiceScreen } from "../../component/screens/OurServiceScreen/OurServiceScreen"
import { OurClientsScreen } from "../../component/screens/OurClientsScreen/OurClientsScreen"
import { FAQScreen } from "../../component/screens/FAQScreen/FAQScreen"



export const Main = () => {

    return (
        <BaseLayout>
            <FirstScreen />
            <StatisticScreen />
            <ReasonsScreen />
            <OurServiceScreen />
            <OurClientsScreen />
            <FAQScreen />
        </BaseLayout>
    )
}