import React from 'react'


export default function LoadingPage() {
    return (
        <>
            <svg className='w-full h-[100vh]' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ margin: 'auto', background: '(rgb(255, 255, 255))', display: 'block', shapeRendering: 'auto' }} width={100} height={100} viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx={30} cy={50} fill="#e90c59" r={20}>
                    <animate attributeName="cx" repeatCount="indefinite" dur="1.075268817204301s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5376344086021505s" />
                </circle>
                <circle cx={70} cy={50} fill="#46dff0" r={20}>
                    <animate attributeName="cx" repeatCount="indefinite" dur="1.075268817204301s" keyTimes="0;0.5;1" values="30;70;30" begin="0s" />
                </circle>
                <circle cx={30} cy={50} fill="#e90c59" r={20}>
                    <animate attributeName="cx" repeatCount="indefinite" dur="1.075268817204301s" keyTimes="0;0.5;1" values="30;70;30" begin="-0.5376344086021505s" />
                    <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1.075268817204301s" repeatCount="indefinite" />
                </circle>
            </svg>
        </>
    )
}
