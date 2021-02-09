
import React from 'react';
import { BaseLayout } from "../../component/base/BaseLayout/BaseLayout"
import { HistoryScreen } from "../../component/screens/HistoryScreen/HistoryScreen"
import { VisionScreen } from "../../component/screens/VisionScreen/VisionScreen"
import { OurValuesScreen } from "../../component/screens/OurValuesScreen/OurValuesScreen"

export const About = () => {

    return (
    <BaseLayout>
        <HistoryScreen />
        <VisionScreen />
        <OurValuesScreen />
    </BaseLayout>
    )
}