import React, { useRef, useEffect, useState } from "react";
import { DivBas, DivBase, DivCuenta, H1Styl, H1Style } from "../style/styleComponent";

export default function Countdown() {
    const [num, setNum] = useState(60);
    const [minu, setMinu] = useState(60);
    const [hora, setHora] = useState(24);
    const [dias, setDias] = useState(8);
    let intervalRef = useRef();
    const decreaseNum = () => setNum((prev) => prev - 1);
    const cuent = () => {
        if (num === 60) {
            intervalRef.current = setInterval(decreaseNum, 1000);
            return () => clearInterval(intervalRef.current);
        }
    }
    const restCuent = () => {
        if (num === -1) {
            clearInterval(intervalRef.current);
            setNum(60)
            setMinu((prev) => prev - 1);
        }
    }
    const restCuentHora = () => {
        if (minu === -1) {
            clearInterval(intervalRef.current);
            setMinu(60)
            setHora((prev) => prev - 1);
        }
    }
    const restCuentDias = () => {
        if (hora === -1) {
            clearInterval(intervalRef.current);
            setHora(24)
            setDias((prev) => prev - 1);
        }
    }
    useEffect(() => {
        restCuentDias();
        restCuentHora();
        restCuent();
        cuent();
    });
    return (
        <div>
            <H1Styl>WE'RE LAUNCHING SOON</H1Styl>
            <svg className="Svg1" xmlns="http://www.w3.org/2000/svg" width="1440" height="569"><path fill="#46485B" d="M774 563a3 3 0 110 6 3 3 0 010-6zm-623.5-5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm875 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-523-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm233-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM178 542a3 3 0 110 6 3 3 0 010-6zm1127.5 2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm45.5-10a3 3 0 110 6 3 3 0 010-6zm-565.5-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-784-15a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm278.5-9a3 3 0 110 6 3 3 0 010-6zm207.5-30a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm50-17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm233-8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm465-22a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-699-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-465-22a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1165-8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-50-17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM250 345a3 3 0 110 6 3 3 0 010-6zm450.5-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-614-15a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm520-13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-570-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1169.5-7a3 3 0 110 6 3 3 0 010-6zm-4.5 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-875-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm523 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-392-34a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm656 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-1008-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1298-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-570-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm520-13a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-145.5-9a3 3 0 110 6 3 3 0 010-6zm-601.5-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm499.5-29a3 3 0 110 6 3 3 0 010-6zm-985.5-10a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-50-17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1298-8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-465-22a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-832-6a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm33.5-18a3 3 0 110 6 3 3 0 010-6zm431.5-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm366-8a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm50-17a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm486-39a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM1136 29a3 3 0 110 6 3 3 0 010-6zm-614.5-2a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM412 23a3 3 0 110 6 3 3 0 010-6zM1.5 14a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm570-4a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm366-7a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm-656-3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zm1008 0a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" /></svg>
            <svg className="Svg2" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="1440" height="197"><defs><path id="a" d="M0 0h1440v197H0z" /></defs><g fill="none" ><mask id="b" fill="#fff"><use href="#a" /></mask><g mask="url(#b)"><path fill="#211A29" d="M1440 50.205L1088.504 0 949.669 50.205 878 25.102 556 0 398.525 50.205l-95.807-25.103-51.328 16.761L45.704 0 0 17.701V160h1440z" /><path fill="#1A1823" d="M1394.296 1l94.649 69.336 50.047-49.449zM1137.282 42.576l51.328 27.76 80.6-5.426zM884 1l157.475 83.151 80.929-26.062zM351.496 1l138.835 83.151 49.321-28.526z" /><path fill="#2F2439" d="M0 84.151L351.496 1l138.835 83.151L562 42.576 884 1l157.475 83.151 95.807-41.575 51.328 27.76L1394.296 1 1440 30.317V266H0z" /></g></g></svg>
            <DivBas>
                <DivBase>
                    <DivCuenta>{dias}</DivCuenta>
                    <H1Style>DAYS</H1Style>
                </DivBase>
                <DivBase>
                    <DivCuenta>{hora}</DivCuenta>
                    <H1Style>HOURS</H1Style>
                </DivBase>
                <DivBase>
                    <DivCuenta>{minu}</DivCuenta>
                    <H1Style>MINUTES</H1Style>
                </DivBase>
                <DivBase>
                    <DivCuenta>{num}</DivCuenta>
                    <H1Style>SECONDS</H1Style>
                </DivBase>
            </DivBas>
        </div>
    );
}