'use client'
import React from "react";
import { BsDiscord } from "react-icons/bs";
import useSWR from "swr";
import axios from "axios";

export default function OnlineCard() {

    const { data, isLoading } = useSWR(`/api/online`, (url) =>
    axios.get(url).then((res) => res.data));

    console.log(data?.data?.discord_status)


    const [status, bgClass] = React.useMemo(() => {
        if (!data) return ["loading", "bg-gray-400"];
        switch (data?.data?.discord_status) {
        case "online":
            return ["Online", "bg-[#35AC8C]"];
        case "offline":
            return ["Offline", "bg-[#AFAFAF]"];
        }
    }, [data]);


    return (
        <div className={`text-white rounded-3xl flex relative overflow-hidden aspect-square shadow-sm ${bgClass}`}>
        <div className="absolute inset-0 flex items-center justify-center text-md md:text-2xl xl:text-3xl font-bold">
            <div className="flex items-center gap-3">
            <p className="flex gap-1 md:gap-2 justify-center items-center">
                <BsDiscord /> {status === "loading" ? "loading" : status}
            </p>
            </div>
        </div>
        <div className="absolute bottom-0 w-full flex justify-end items-center p-5 gap-5 invisible lg:visible">
            <div className="flex flex-col items-end ">
                <p className="font-bold">@devtony_</p>
            </div>
        </div>
        </div>
    );
}