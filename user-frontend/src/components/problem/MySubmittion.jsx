import { useEffect, useState } from "react";

export default function MySubmittion(){
    return (
        <div className="flex h-[calc(100vh-94px)] overflow-y-hidden px-0 py-4">
           <h1>In Development !!!!</h1>
        </div>
    )
}

function Code({code}){
    return (
        <div className="flex-col rounded-[10px] border-2 border-black/20">
                code code code code{code}
        </div>
    )
}