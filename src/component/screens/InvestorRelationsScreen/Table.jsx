import React from 'react';
import { useTranslation } from 'react-i18next';
import { ReactComponent as File} from "../../../assets/icons/file.svg";
import { ReactComponent as Share } from "../../../assets/icons/share.svg";
import { ReactComponent as Download } from "../../../assets/icons/download.svg";
import { ReactComponent as Printer } from "../../../assets/icons/printer.svg";
import './style.css'


export const Table = ({title, list}) => { 
    const { t } = useTranslation();

    return (
        <div className="my-5">
            <h2 className="file-table-name mb-4">{title}</h2>
            <div className="file-table">
                <div className="file-table-header">
                    <p>{t("investor.name")}</p>
                    <button className="investor-buttons">{t("investor.download")}</button>
                </div>
                <div className="file-table-body">
                    {list.map((item, index) => 
                        <div className="file-table-row" key={index}>
                            <div>
                                <File className="mx-3" />
                                {item}
                            </div>
                            <div className="justify-content-end">
                                <button className="investor-buttons"><Download /></button>
                                <button className="investor-buttons mx-4"><Printer /></button>
                                <button className="investor-buttons"><Share /></button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>

    );
}