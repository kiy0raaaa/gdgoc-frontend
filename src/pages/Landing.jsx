import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SiteNavigation from '../components/SiteNavigation';

const assetPathPrefix = "/assets";
const imgRectangle1 = `${assetPathPrefix}/imgRectangle1.png`;
const imgArrow = `${assetPathPrefix}/imgArrow.svg`;
const imgMarker = `${assetPathPrefix}/imgMarker.svg`;
const imgArrow1 = `${assetPathPrefix}/imgArrow1.svg`;
const imgCommunityColors = `${assetPathPrefix}/imgCommunityColors.svg`;
const imgWarmGlow = `${assetPathPrefix}/imgWarmGlow.svg`;
const imgBlueGlow = `${assetPathPrefix}/imgBlueGlow.svg`;
const imgGroup = `${assetPathPrefix}/imgGroup.svg`;
const imgGroup1 = `${assetPathPrefix}/imgGroup1.svg`;
const imgGroup2 = `${assetPathPrefix}/imgGroup2.svg`;
const imgGroup3 = `${assetPathPrefix}/imgGroup3.svg`;
const imgGroup4 = `${assetPathPrefix}/imgGroup4.svg`;
const imgGroup5 = `${assetPathPrefix}/imgGroup5.svg`;
const imgStatusMarker = `${assetPathPrefix}/imgStatusMarker.svg`;
const imgGroup6 = `${assetPathPrefix}/imgGroup6.svg`;
const imgGroup7 = `${assetPathPrefix}/imgGroup7.svg`;
const imgGroup8 = `${assetPathPrefix}/imgGroup8.svg`;
const imgGroup9 = `${assetPathPrefix}/imgGroup9.svg`;
const imgGroup10 = `${assetPathPrefix}/imgGroup10.svg`;
const imgGroup39838 = `${assetPathPrefix}/imgGroup39838.svg`;
const imgGroup11 = `${assetPathPrefix}/imgGroup11.svg`;
const imgGroup12 = `${assetPathPrefix}/imgGroup12.svg`;
const imgGroup13 = `${assetPathPrefix}/imgGroup13.svg`;
const imgFormatIcon = `${assetPathPrefix}/imgFormatIcon.svg`;
const imgFormatIcon1 = `${assetPathPrefix}/imgFormatIcon1.svg`;
const imgFormatIcon2 = `${assetPathPrefix}/imgFormatIcon2.svg`;
const imgBrowserChrome = `${assetPathPrefix}/imgBrowserChrome.svg`;
const imgCommunitySpark = `${assetPathPrefix}/imgCommunitySpark.svg`;
const imgDisclosure = `${assetPathPrefix}/imgDisclosure.svg`;
const imgGoogleDeveloperGroupsOnCampusUniversitasGadjahMada1 = `${assetPathPrefix}/imgGoogleDeveloperGroupsOnCampusUniversitasGadjahMada1.svg`;
const imgGroup14 = `${assetPathPrefix}/imgGroup14.svg`;
const imgGroup15 = `${assetPathPrefix}/imgGroup15.svg`;

const faqs = [
    { q: 'Do I need to know how to code?', a: 'No. Start with an interest in technology and a willingness to learn. Research and design are part of the journey, too.' },
    { q: 'Is this only for computer science students?', a: 'Different disciplines bring different perspectives. Explore the overview to find a starting point that fits your interests.' },
    { q: 'How can I find learning opportunities?', a: 'Keep an eye on @gdgoc.ugm for community updates. You can also use the contact page to ask about getting involved.' },
    ];
    export default function LandingGdGoCUgm() {
    const [openFaq, setOpenFaq] = useState(0);
    const navigate = useNavigate();

    const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
    <div className="bg-white content-stretch flex min-h-screen w-full flex-col items-start relative" data-node-id="14:16047" data-name="Landing - GDGoC UGM">
        <SiteNavigation onAction={() => navigate('/overview')} />
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-node-id="14:16065" id="home" data-name="Welcome to the community">
        <div className="content-stretch flex w-full flex-col gap-10 items-center px-5 py-12 relative sm:px-8 lg:flex-row lg:gap-[40px] lg:pb-16 lg:pl-24 lg:pr-16 lg:pt-[72px]" data-node-id="14:16066" data-name="Hero">
            <div className="content-stretch flex w-full max-w-[620px] flex-1 flex-col gap-7 items-start overflow-clip relative min-w-0 lg:gap-[28px]">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="14:16068" data-name="Section label">
                <div className="relative shrink-0 size-[7px]" data-node-id="14:16069" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                </div>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[12px] uppercase whitespace-nowrap" data-node-id="14:16070">
                GDGoC UGM • 2026/2027
                </p>
            </div>
            <div className="[word-break:break-word] font-sans font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#242424] text-5xl w-[min-content] sm:text-6xl lg:text-[80px]" data-node-id="14:16071">
                <p className="font-sans font-bold leading-[1.05] mb-0">Big ideas.</p>
                <p className="font-sans font-bold leading-[1.05] text-[#1967d2]">Built together.</p>
            </div>
            <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full relative shrink-0 text-[#5f6368] text-lg sm:text-[21px]">
                <span className="leading-[1.55]">{`A place for curious minds at `}</span>
                <span className="font-sans font-bold leading-[1.55]">Universitas Gadjah Mada</span>
                <span className="leading-[1.55]">{` to learn, connect, and build technology that matters.`}</span>
            </p>
            <div className="content-stretch flex flex-wrap gap-3 items-start overflow-clip relative shrink-0" data-node-id="14:16073" data-name="Hero actions">
                <div className="bg-[#4284f4] border border-[rgba(255,255,255,0)] border-solid content-stretch flex gap-[16px] h-[52px] items-center overflow-clip px-[24px] relative rounded-[8px] shrink-0 cursor-pointer hover:brightness-95 active:scale-[0.98] transition" data-node-id="14:16074" data-name="Action" role="button" tabIndex={0} onClick={() => go('overview')}>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="14:16075">
                    Find your learning track
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="14:16076" data-name="Arrow">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow} />
                </div>
                </div>
                <div className="bg-white border border-[#dadce0] border-solid content-stretch flex gap-[16px] h-[52px] items-center overflow-clip px-[24px] relative rounded-[8px] shrink-0 cursor-pointer hover:brightness-95 active:scale-[0.98] transition" data-node-id="14:16078" data-name="Action" role="button" tabIndex={0} onClick={() => go('overview')}>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[16px] whitespace-nowrap" data-node-id="14:16079">
                    Get to know us
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="14:16080" data-name="Arrow">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
                </div>
                </div>
            </div>
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="14:16082" data-name="Welcome note">
                <div className="h-[16px] relative shrink-0 w-[55px]" data-node-id="14:16083" data-name="Community colors">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommunityColors} />
                </div>
                <p className="[word-break:break-word] font-sans font-normal leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[14px] whitespace-nowrap" data-node-id="14:16088">
                Different backgrounds. A shared curiosity.
                </p>
            </div>
            </div>
            <div className="relative aspect-[62/53] w-full max-w-[620px] flex-1 min-w-0 overflow-hidden [container-type:inline-size]" data-node-id="14:16089" data-name="Ideas coming together">
            <div className="absolute left-0 top-0 h-[530px] w-[620px] origin-top-left overflow-clip rounded-[32px] bg-[#eaf2ff]" style={{ transform: "scale(calc(100cqw / 620))" }} data-node-id="14:16130" data-name="Glass tile artwork">
                <div className="absolute left-[-100px] size-[300px] top-[318px]" data-node-id="14:16192" data-name="Warm glow">
                <div className="absolute inset-[-26.67%]">
                    <img alt="" className="block max-w-none size-full" src={imgWarmGlow} />
                </div>
                </div>
                <div className="absolute left-[341px] size-[440px] top-[-100px]" data-node-id="14:16191" data-name="Blue glow">
                <div className="absolute inset-[-25%]">
                    <img alt="" className="block max-w-none size-full" src={imgBlueGlow} />
                </div>
                </div>
                <div className="absolute left-[475px] size-[95.94px] top-[376px]" data-node-id="14:16189" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16189;167:145" />
                </div>
                <div className="absolute left-[376px] size-[95.94px] top-[376px]" data-node-id="14:16187" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16187;167:145" />
                </div>
                <div className="absolute left-[277px] size-[95.94px] top-[376px]" data-node-id="14:16185" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16185;167:145" />
                </div>
                <div className="absolute left-[178px] size-[95.94px] top-[376px]" data-node-id="14:16183" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16183;167:145" />
                </div>
                <div className="absolute left-[79px] size-[95.94px] top-[376px]" data-node-id="14:16181" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16181;167:145" />
                </div>
                <div className="absolute left-[-20px] size-[95.94px] top-[376px]" data-node-id="14:16179" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16179;167:145" />
                </div>
                <div className="absolute left-[475px] size-[95.94px] top-[277px]" data-node-id="14:16177" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16177;167:145" />
                </div>
                <div className="absolute left-[376px] size-[95.94px] top-[277px]" data-node-id="14:16175" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16175;167:145" />
                </div>
                <div className="absolute left-[277px] size-[95.94px] top-[277px]" data-node-id="14:16173" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16173;167:145" />
                </div>
                <div className="absolute left-[178px] size-[95.94px] top-[277px]" data-node-id="14:16171" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16171;167:145" />
                </div>
                <div className="absolute left-[79px] size-[95.94px] top-[277px]" data-node-id="14:16169" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16169;167:145" />
                </div>
                <div className="absolute left-[-20px] size-[95.94px] top-[277px]" data-node-id="14:16167" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16167;167:145" />
                </div>
                <div className="absolute left-[475px] size-[95.94px] top-[178px]" data-node-id="14:16165" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16165;167:145" />
                </div>
                <div className="absolute left-[376px] size-[95.94px] top-[178px]" data-node-id="14:16163" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16163;167:145" />
                </div>
                <div className="absolute left-[277px] size-[95.94px] top-[178px]" data-node-id="14:16161" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16161;167:145" />
                </div>
                <div className="absolute left-[178px] size-[95.94px] top-[178px]" data-node-id="14:16159" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16159;167:145" />
                </div>
                <div className="absolute left-[79px] size-[95.94px] top-[178px]" data-node-id="14:16157" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16157;167:145" />
                </div>
                <div className="absolute left-[-20px] size-[95.94px] top-[178px]" data-node-id="14:16155" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16155;167:145" />
                </div>
                <div className="absolute left-[475px] size-[95.94px] top-[79px]" data-node-id="14:16153" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16153;167:145" />
                </div>
                <div className="absolute left-[376px] size-[95.94px] top-[79px]" data-node-id="14:16151" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16151;167:145" />
                </div>
                <div className="absolute left-[277px] size-[95.94px] top-[79px]" data-node-id="14:16149" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16149;167:145" />
                </div>
                <div className="absolute left-[178px] size-[95.94px] top-[79px]" data-node-id="14:16147" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16147;167:145" />
                </div>
                <div className="absolute left-[79px] size-[95.94px] top-[79px]" data-node-id="14:16145" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16145;167:145" />
                </div>
                <div className="absolute left-[-20px] size-[95.94px] top-[79px]" data-node-id="14:16143" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16143;167:145" />
                </div>
                <div className="absolute left-[475px] size-[95.94px] top-[-20px]" data-node-id="14:16141" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16141;167:145" />
                </div>
                <div className="absolute left-[376px] size-[95.94px] top-[-20px]" data-node-id="14:16139" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16139;167:145" />
                </div>
                <div className="absolute left-[277px] size-[95.94px] top-[-20px]" data-node-id="14:16137" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16137;167:145" />
                </div>
                <div className="absolute left-[178px] size-[95.94px] top-[-20px]" data-node-id="14:16135" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16135;167:145" />
                </div>
                <div className="absolute left-[79px] size-[95.94px] top-[-20px]" data-node-id="14:16133" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16133;167:145" />
                </div>
                <div className="absolute left-[-20px] size-[95.94px] top-[-20px]" data-node-id="14:16131" data-name="Glass tile">
                <div className="absolute bg-[rgba(255,255,255,0.01)] inset-0 rounded-[10.338px]" data-node-id="I14:16131;167:145" />
                </div>
            </div>
            <div className="absolute left-[18px] size-[242.873px] top-[2px]" data-node-id="14:16107" data-name="Research artwork">
                <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%-0.44px)] size-[238px] top-[calc(50%-0.44px)]" data-node-id="I14:16107;156:48385" data-name="HUSTLER">
                <div className="absolute contents inset-[12.5%_-1%_11%_12.5%]" data-node-id="I14:16107;156:48386" data-name="Group">
                    <div className="absolute h-[182.07px] left-[58.31px] top-[29.75px] w-[182.069px]" data-node-id="I14:16107;156:48387" data-name="Group">
                    <div className="absolute inset-[-5.23%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup} />
                    </div>
                    </div>
                    <div className="absolute bottom-[12.5%] left-[12.5%] right-1/4 top-1/4" data-node-id="I14:16107;156:48389" data-name="Group">
                    <div className="absolute inset-[-3.2%_-6.4%_-9.6%_-6.4%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup1} />
                    </div>
                    </div>
                    <div className="absolute inset-[33.07%_17.27%_14.55%_18.75%]" data-node-id="I14:16107;156:48391" data-name="Group">
                    <div className="absolute inset-[-3.82%_-6.25%_-11.46%_-6.25%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup2} />
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="absolute left-[186px] size-[392.883px] top-[85px]" data-node-id="14:16095" data-name="Development artwork">
                <div className="absolute contents inset-[12.5%_-2%_8.17%_7.78%]" data-node-id="I14:16095;156:48359" data-name="Group">
                <div className="absolute inset-[12.5%_-2%_24.5%_11%]" data-node-id="I14:16095;156:48360" data-name="Group">
                    <div className="absolute inset-[-6.22%_-4.31%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup3} />
                    </div>
                </div>
                <div className="absolute inset-[24.12%_17.51%_8.17%_7.78%]" data-node-id="I14:16095;156:48362" data-name="Group">
                    <div className="absolute inset-[-2.89%_-5.25%_-8.68%_-5.25%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup4} />
                    </div>
                </div>
                <div className="absolute inset-[31.91%_24.8%_43.55%_34.63%]" data-node-id="I14:16095;156:48368" data-name="Group">
                    <div className="absolute inset-[-17.83%_-15.61%_-33.8%_-15.61%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup5} />
                    </div>
                </div>
                </div>
            </div>
            <div className="absolute bg-white content-stretch flex gap-[8px] items-center left-[300px] overflow-clip px-[16px] py-[10px] rounded-[100px] top-[455px]" data-node-id="14:16092" data-name="Campus label">
                <div className="relative shrink-0 size-[8px]" data-node-id="14:16093" data-name="Status marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgStatusMarker} />
                </div>
                <p className="[word-break:break-word] font-sans font-normal leading-[0] not-italic relative shrink-0 text-[#5f6368] text-[12px] whitespace-nowrap" data-node-id="14:16094">
                <span className="leading-[normal]">{`Built on `}</span>
                <span className="font-sans font-bold leading-[normal]">curiosity.</span>
                <span className="leading-[normal]">{` Rooted in `}</span>
                <span className="font-sans font-bold leading-[normal]">UGM.</span>
                </p>
            </div>
            <div className="absolute flex h-[86.677px] items-center justify-center left-[24px] top-[325.81px] w-[252.105px]" data-node-id="14:16090">
                <div className="-rotate-7 flex-none">
                <div className="bg-white border border-[#dadce0] border-solid content-stretch flex items-start overflow-clip px-[20px] py-[14px] relative rounded-[8px]" data-name="Learning sticker">
                    <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#242424] text-[23px] whitespace-nowrap" data-node-id="14:16091">
                    hello, possibilities_
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="border-[#dadce0] border-b border-solid border-t content-stretch flex flex-wrap items-start justify-between gap-x-6 gap-y-4 overflow-clip px-5 py-6 relative w-full sm:px-8 lg:px-24" data-node-id="14:16193" data-name="Community promise">
            <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-node-id="14:16194" data-name="Promise">
            <div className="bg-[#4284f4] relative shrink-0 size-[8px]" data-node-id="14:16195" data-name="Accent" />
            <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#242424] text-[18px] whitespace-nowrap" data-node-id="14:16196">
                Learn by doing
            </p>
            </div>
            <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-node-id="14:16197" data-name="Promise">
            <div className="bg-[#ea4335] relative shrink-0 size-[8px]" data-node-id="14:16198" data-name="Accent" />
            <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#242424] text-[18px] whitespace-nowrap" data-node-id="14:16199">
                Connect across disciplines
            </p>
            </div>
            <div className="content-stretch flex gap-[14px] items-center overflow-clip relative shrink-0" data-node-id="14:16200" data-name="Promise">
            <div className="bg-[#34a853] relative shrink-0 size-[8px]" data-node-id="14:16201" data-name="Accent" />
            <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#242424] text-[18px] whitespace-nowrap" data-node-id="14:16202">
                Build with purpose
            </p>
            </div>
        </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="14:16203" id="about" data-name="Discover learning">
        <div className="content-stretch flex flex-col gap-10 items-start overflow-clip px-5 py-14 relative w-full sm:px-8 lg:flex-row lg:gap-24 lg:px-24 lg:py-[88px]" data-node-id="14:16204" data-name="Community introduction">
            <div className="content-stretch flex w-full flex-col gap-5 items-start overflow-clip relative shrink-0 lg:max-w-[490px]" data-node-id="14:16205" data-name="Introduction heading">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="14:16206" data-name="Section label">
                <div className="relative shrink-0 size-[7px]" data-node-id="14:16207" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                </div>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[12px] uppercase whitespace-nowrap" data-node-id="14:16208">
                A campus. A community.
                </p>
            </div>
            <div className="[word-break:break-word] font-sans font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#242424] text-4xl sm:text-[48px] w-[min-content]">
                <p className="leading-[1.12] mb-0">Not just learning tech.</p>
                <p className="leading-[1.12]">Finding your people.</p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-node-id="14:16210" data-name="Text link" role="button" tabIndex={0} onClick={() => go('overview')}>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[16px] whitespace-nowrap" data-node-id="14:16211">
                More about GDGoC UGM
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="14:16212" data-name="Arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
                </div>
            </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip relative" data-node-id="14:16214" data-name="Introduction story">
            <p className="[word-break:break-word] font-sans font-normal leading-[0] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[21px] w-[min-content]" data-node-id="14:16215">
                <span className="leading-[1.55]">{`Google Developer Groups on Campus, Universitas Gadjah Mada brings students together around one simple idea: we can go `}</span>
                <span className="font-sans font-bold leading-[1.55]">further</span>
                <span className="leading-[1.55]">{` when we `}</span>
                <span className="font-sans font-bold leading-[1.55]">learn</span>
                <span className="leading-[1.55]">{` with each other.`}</span>
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[18px] w-[min-content]" data-node-id="14:16216">
                From your first line of code to your next product idea, there’s room to ask questions, share what you know, and try something new.
            </p>
            <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0" data-node-id="14:16217" data-name="Community attributes">
                <div className="bg-[#f1f3f4] content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="14:16218" data-name="Attribute">
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[13px] whitespace-nowrap" data-node-id="14:16219">
                    Student-led
                </p>
                </div>
                <div className="bg-[#f1f3f4] content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="14:16220" data-name="Attribute">
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[13px] whitespace-nowrap" data-node-id="14:16221">
                    Peer-powered
                </p>
                </div>
                <div className="bg-[#f1f3f4] content-stretch flex items-start overflow-clip px-[14px] py-[8px] relative rounded-[100px] shrink-0" data-node-id="14:16222" data-name="Attribute">
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[13px] whitespace-nowrap" data-node-id="14:16223">
                    Curiosity-first
                </p>
                </div>
            </div>
            </div>
        </div>
        <div className="content-stretch flex flex-col gap-9 items-start overflow-clip pb-14 pt-4 px-5 relative w-full sm:px-8 lg:px-24 lg:pb-[88px]" data-node-id="14:16224" id="overview" data-name="Track discovery">
            <div className="content-stretch flex items-end justify-between overflow-clip relative shrink-0 w-full" data-node-id="14:16225" data-name="Tracks header">
            <div className="content-stretch flex w-full max-w-[800px] flex-col gap-[18px] items-start overflow-clip relative shrink-0" data-node-id="14:16226" data-name="Section introduction">
                <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="14:16227" data-name="Section label">
                <div className="relative shrink-0 size-[7px]" data-node-id="14:16228" data-name="Marker">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                </div>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[12px] uppercase whitespace-nowrap" data-node-id="14:16229">
                    Find your starting point
                </p>
                </div>
                <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-4xl sm:text-[48px]">
                Many interests. One shared journey.
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[18px] w-[min-content]" data-node-id="14:16231">
                Follow what excites you. Explore a track, then connect the dots with others.
                </p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-node-id="14:16232" data-name="Text link" role="button" tabIndex={0} onClick={() => go('overview')}>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[16px] whitespace-nowrap" data-node-id="14:16233">
                See the overview
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="14:16234" data-name="Arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
                </div>
            </div>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 overflow-clip md:grid-cols-2 xl:grid-cols-3" data-node-id="14:16236" data-name="Learning tracks">
            <div className="border border-[#dadce0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[24px] self-stretch transition-shadow hover:shadow-lg" data-node-id="14:16237" data-name="Track card">
                <div className="bg-[#eaf2ff] h-[232px] relative shrink-0 w-full" data-node-id="14:16238" data-name="Track illustration">
                <div className="absolute left-[70px] size-[257.16px] top-[-4px]" data-node-id="14:16239" data-name="Glass track artwork">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.42px)] size-[252px] top-[calc(50%+0.42px)]" data-node-id="I14:16239;156:48385" data-name="HUSTLER">
                    <div className="absolute contents inset-[12.5%_-1%_11%_12.5%]" data-node-id="I14:16239;156:48386" data-name="Group">
                        <div className="absolute h-[192.78px] left-[61.74px] top-[31.5px] w-[192.779px]" data-node-id="I14:16239;156:48387" data-name="Group">
                        <div className="absolute inset-[-5.23%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup6} />
                        </div>
                        </div>
                        <div className="absolute bottom-[12.5%] left-[12.5%] right-1/4 top-1/4" data-node-id="I14:16239;156:48389" data-name="Group">
                        <div className="absolute inset-[-3.2%_-6.4%_-9.6%_-6.4%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup7} />
                        </div>
                        </div>
                        <div className="absolute inset-[33.07%_17.27%_14.55%_18.75%]" data-node-id="I14:16239;156:48391" data-name="Group">
                        <div className="absolute inset-[-3.82%_-6.25%_-11.46%_-6.25%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup8} />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip p-[28px] relative shrink-0 w-full" data-node-id="14:16262" data-name="Track details">
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[11px] uppercase whitespace-nowrap" data-node-id="14:16263">
                    Explore the why
                </p>
                <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-[28px] w-[min-content]" data-node-id="14:16264">{`Research & discovery`}</p>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16265">
                    Ask better questions, understand people, and turn insight into a clear problem worth solving.
                </p>
                <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-node-id="14:16266" data-name="Divider" />
                <p className="[word-break:break-word] font-sans font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[13px] w-[min-content]" data-node-id="14:16267">
                    Problem framing · User research · Product thinking
                </p>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-node-id="14:16268" data-name="Text link" role="button" tabIndex={0} onClick={() => go('overview')}>
                    <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[16px] whitespace-nowrap" data-node-id="14:16269">
                    Explore this track
                    </p>
                    <div className="relative shrink-0 size-[20px]" data-node-id="14:16270" data-name="Arrow">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
                    </div>
                </div>
                </div>
            </div>
            <div className="border border-[#dadce0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[24px] self-stretch transition-shadow hover:shadow-lg" data-node-id="14:16272" data-name="Track card">
                <div className="bg-[#fff7df] h-[232px] relative shrink-0 w-full" data-node-id="14:16273" data-name="Track illustration">
                <div className="absolute left-[70px] size-[252px] top-[-4px]" data-node-id="14:16274" data-name="Glass track artwork">
                    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[252px] top-1/2" data-node-id="I14:16274;156:48371" data-name="HIPSTER">
                    <div className="absolute contents inset-[12.45%_-1.85%_4.28%_5.06%]" data-node-id="I14:16274;156:48372" data-name="Group">
                        <div className="absolute inset-[12.45%_-1.85%_10.51%_24.81%]" data-node-id="I14:16274;156:48373" data-name="Group">
                        <div className="absolute inset-[-3.71%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup9} />
                        </div>
                        </div>
                        <div className="absolute inset-[21.4%_20.62%_4.28%_5.06%]" data-node-id="I14:16274;156:48375" data-name="Group">
                        <div className="absolute inset-[0_-0.56%_-2.82%_-0.9%]">
                            <img alt="" className="block max-w-none size-full" src={imgGroup10} />
                        </div>
                        </div>
                        <div className="absolute contents inset-[32.42%_20.72%_10.63%_27.1%]" data-node-id="I14:16274;156:48380" data-name="Group">
                        <div className="absolute flex inset-[32.42%_20.72%_10.63%_27.1%] items-center justify-center" data-node-id="I14:16274;156:48381" style={{ containerType: "size" }}>
                            <div className="-scale-x-100 flex-none h-[100cqh] w-[100cqw]">
                            <div className="relative size-full">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup39838} />
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip p-[28px] relative shrink-0 w-full" data-node-id="14:16299" data-name="Track details">
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[11px] uppercase whitespace-nowrap" data-node-id="14:16300">
                    Make it meaningful
                </p>
                <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-[28px] w-[min-content]" data-node-id="14:16301">{`Design & creativity`}</p>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16302">
                    Translate ideas into thoughtful experiences, from a first sketch to a prototype people can use.
                </p>
                <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-node-id="14:16303" data-name="Divider" />
                <p className="[word-break:break-word] font-sans font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[13px] w-[min-content]" data-node-id="14:16304">
                    UI/UX · Visual storytelling · Prototyping
                </p>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-node-id="14:16305" data-name="Text link" role="button" tabIndex={0} onClick={() => go('overview')}>
                    <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[16px] whitespace-nowrap" data-node-id="14:16306">
                    Explore this track
                    </p>
                    <div className="relative shrink-0 size-[20px]" data-node-id="14:16307" data-name="Arrow">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
                    </div>
                </div>
                </div>
            </div>
            <div className="border border-[#dadce0] border-solid content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip relative rounded-[24px] self-stretch transition-shadow hover:shadow-lg" data-node-id="14:16309" data-name="Track card">
                <div className="bg-[#eaf5ed] h-[232px] relative shrink-0 w-full" data-node-id="14:16310" data-name="Track illustration">
                <div className="absolute left-[70px] size-[257.16px] top-[-4px]" data-node-id="14:16311" data-name="Glass track artwork">
                    <div className="absolute contents inset-[12.5%_-2%_8.17%_7.78%]" data-node-id="I14:16311;156:48359" data-name="Group">
                    <div className="absolute inset-[12.5%_-2%_24.5%_11%]" data-node-id="I14:16311;156:48360" data-name="Group">
                        <div className="absolute inset-[-6.22%_-4.31%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup11} />
                        </div>
                    </div>
                    <div className="absolute inset-[24.12%_17.51%_8.17%_7.78%]" data-node-id="I14:16311;156:48362" data-name="Group">
                        <div className="absolute inset-[-2.89%_-5.25%_-8.68%_-5.25%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup12} />
                        </div>
                    </div>
                    <div className="absolute inset-[31.91%_24.8%_43.55%_34.63%]" data-node-id="I14:16311;156:48368" data-name="Group">
                        <div className="absolute inset-[-17.83%_-15.61%_-33.8%_-15.61%]">
                        <img alt="" className="block max-w-none size-full" src={imgGroup13} />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="content-stretch flex flex-col gap-[18px] items-start overflow-clip p-[28px] relative shrink-0 w-full" data-node-id="14:16323" data-name="Track details">
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[11px] uppercase whitespace-nowrap" data-node-id="14:16324">
                    Bring ideas to life
                </p>
                <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-[28px] w-[min-content]" data-node-id="14:16325">
                    Development
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16326">
                    Learn the tools, write the code, and build useful things with people who enjoy figuring it out.
                </p>
                <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-node-id="14:16327" data-name="Divider" />
                <p className="[word-break:break-word] font-sans font-normal leading-[1.5] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[13px] w-[min-content]" data-node-id="14:16328">{`Web & mobile · Cloud · AI foundations`}</p>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-node-id="14:16329" data-name="Text link" role="button" tabIndex={0} onClick={() => go('overview')}>
                    <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[16px] whitespace-nowrap" data-node-id="14:16330">
                    Explore this track
                    </p>
                    <div className="relative shrink-0 size-[20px]" data-node-id="14:16331" data-name="Arrow">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <div className="bg-[#f1f3f4] content-stretch flex flex-col gap-10 items-start overflow-clip px-5 py-14 relative w-full sm:px-8 lg:px-24 lg:py-20" data-node-id="14:16333" data-name="Learning formats">
            <div className="content-stretch flex w-full max-w-[800px] flex-col gap-[18px] items-start overflow-clip relative shrink-0" data-node-id="14:16334" data-name="Section introduction">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="14:16335" data-name="Section label">
                <div className="relative shrink-0 size-[7px]" data-node-id="14:16336" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                </div>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[12px] uppercase whitespace-nowrap" data-node-id="14:16337">
                More than a classroom
                </p>
            </div>
            <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-4xl sm:text-[48px]">
                Less watching. More making.
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[18px] w-[min-content]" data-node-id="14:16339">
                Learn in a way that turns a new concept into something you can actually use.
            </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3" data-node-id="14:16340" data-name="Program formats">
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip p-[32px] relative rounded-[24px]" data-node-id="14:16341" data-name="Program format">
                <div className="relative shrink-0 size-[24px]" data-node-id="14:16342" data-name="Format icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFormatIcon} />
                </div>
                <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-[28px] w-[min-content]" data-node-id="14:16344">
                Study together
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16345">
                Work through foundations in peer learning sessions. Bring your questions; leave with a next step.
                </p>
                <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-node-id="14:16346" data-name="Divider" />
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#1967d2] text-[13px] w-[min-content]" data-node-id="14:16347">{`Study groups & guided practice`}</p>
            </div>
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip p-[32px] relative rounded-[24px] self-stretch" data-node-id="14:16348" data-name="Program format">
                <div className="relative shrink-0 size-[24px]" data-node-id="14:16349" data-name="Format icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFormatIcon1} />
                </div>
                <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-[28px] w-[min-content]" data-node-id="14:16351">
                Try it hands-on
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16352">
                Explore a tool or technique in a workshop, then put it to work in a small experiment.
                </p>
                <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-node-id="14:16353" data-name="Divider" />
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#1967d2] text-[13px] w-[min-content]" data-node-id="14:16354">{`Workshops & technical sessions`}</p>
            </div>
            <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip p-[32px] relative rounded-[24px] self-stretch" data-node-id="14:16355" data-name="Program format">
                <div className="relative shrink-0 size-[24px]" data-node-id="14:16356" data-name="Format icon">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFormatIcon2} />
                </div>
                <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-[28px] w-[min-content]" data-node-id="14:16358">
                Share the process
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16359">
                Exchange feedback, explain your decisions, and learn from different ways of thinking.
                </p>
                <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-node-id="14:16360" data-name="Divider" />
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] min-w-full not-italic relative shrink-0 text-[#1967d2] text-[13px] w-[min-content]" data-node-id="14:16361">{`Project circles & sharing sessions`}</p>
            </div>
            </div>
        </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="14:16362" data-name="Build and belong">
        <div className="content-stretch flex flex-col gap-10 items-center overflow-clip px-5 py-14 relative w-full sm:px-8 lg:flex-row lg:gap-16 lg:px-24 lg:py-[88px]" data-node-id="14:16363" data-name="Project possibility">
            <div className="bg-[#fff7df] content-stretch flex w-full max-w-[592px] flex-col gap-6 items-start overflow-clip p-6 relative rounded-[32px] sm:p-10" data-node-id="14:16364" data-name="Example project artwork">
            <div className="[word-break:break-word] content-stretch flex font-sans font-normal items-center justify-between leading-[normal] not-italic overflow-clip relative shrink-0 w-full whitespace-nowrap" data-node-id="14:16365" data-name="Project card header">
                <p className="relative shrink-0 text-[#5f6368] text-[12px]" data-node-id="14:16366">
                IDEA → PROTOTYPE
                </p>
                <p className="relative shrink-0 text-[#1967d2] text-[24px]" data-node-id="14:16367">{`</>`}</p>
            </div>
            <div className="bg-white border border-[#dadce0] border-solid content-stretch flex flex-col gap-[24px] items-start overflow-clip p-[26px] relative rounded-[16px] shrink-0 w-full" data-node-id="14:16368" data-name="Campus project preview">
                <div className="h-[8px] relative shrink-0 w-[36px]" data-node-id="14:16369" data-name="Browser chrome">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBrowserChrome} />
                </div>
                <div className="[word-break:break-word] font-sans font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#242424] text-[32px] w-[min-content]" data-node-id="14:16373">
                <p className="leading-[1.12] mb-0">A little less friction.</p>
                <p className="leading-[1.12]">A better campus day.</p>
                </div>
                <div className="content-stretch flex gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-node-id="14:16374" data-name="Solution tiles">
                <div className="bg-[#eaf2ff] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip p-[16px] relative rounded-[12px]" data-node-id="14:16375" data-name="Solution tile">
                    <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-black whitespace-nowrap" data-node-id="14:16377">
                    Discover
                    </p>
                </div>
                <div className="bg-[#eaf5ed] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip p-[16px] relative rounded-[12px]" data-node-id="14:16378" data-name="Solution tile">
                    <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-black whitespace-nowrap" data-node-id="14:16380">
                    Connect
                    </p>
                </div>
                <div className="bg-[#fdedea] content-stretch flex flex-[1_0_0] flex-col items-start min-w-px overflow-clip p-[16px] relative rounded-[12px]" data-node-id="14:16381" data-name="Solution tile">
                    <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[13px] text-black whitespace-nowrap" data-node-id="14:16383">
                    Share
                    </p>
                </div>
                </div>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[13px] w-[min-content]" data-node-id="14:16384">
                Start with a student need. Build a small, useful solution.
                </p>
            </div>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[11px] whitespace-nowrap" data-node-id="14:16385">
                EXAMPLE PROJECT BRIEF • NOT A LAUNCHED PRODUCT
            </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip relative" data-node-id="14:16386" data-name="Project copy">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="14:16387" data-name="Section label">
                <div className="relative shrink-0 size-[7px]" data-node-id="14:16388" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                </div>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[12px] uppercase whitespace-nowrap" data-node-id="14:16389">
                Build something that matters
                </p>
            </div>
            <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-4xl sm:text-[48px]">
                Your next project could start on campus.
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[18px] w-[min-content]" data-node-id="14:16391">
                What if finding a study partner, sharing resources, or navigating campus felt easier? Small, familiar problems can be the beginning of meaningful work.
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16392">
                Bring research, design, and development together. Try an idea, get feedback, and make the next version better.
            </p>
            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-node-id="14:16393" data-name="Text link" role="button" tabIndex={0} onClick={() => go('overview')}>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[16px] whitespace-nowrap" data-node-id="14:16394">
                Explore project-based learning
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="14:16395" data-name="Arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
                </div>
            </div>
            </div>
        </div>
        <div className="content-stretch flex flex-col gap-10 items-start overflow-clip pb-14 pt-2 px-5 relative w-full sm:px-8 lg:px-24 lg:pb-[88px]" data-node-id="14:16397" data-name="Getting started">
        <div className="content-stretch flex w-full max-w-[800px] flex-col gap-[18px] items-start overflow-clip relative shrink-0" data-node-id="14:16398" data-name="Section introduction">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="14:16399" data-name="Section label">
                <div className="relative shrink-0 size-[7px]" data-node-id="14:16400" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                </div>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[12px] uppercase whitespace-nowrap" data-node-id="14:16401">
                Make your first move
                </p>
            </div>
            <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-4xl sm:text-[48px]">
                You don’t need to have it all figured out.
            </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-10 overflow-clip md:grid-cols-3" data-node-id="14:16403" data-name="Participation journey">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-node-id="14:16404" data-name="Journey step">
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-4xl sm:text-[44px] whitespace-nowrap" data-node-id="14:16405">
                01
                </p>
                <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-node-id="14:16406" data-name="Divider" />
                <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-[25px] w-[min-content]" data-node-id="14:16407">
                Follow your curiosity
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16408">
                Explore the tracks and find a topic you want to understand better.
                </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-node-id="14:16409" data-name="Journey step">
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-4xl sm:text-[44px] whitespace-nowrap" data-node-id="14:16410">
                02
                </p>
                <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-node-id="14:16411" data-name="Divider" />
                <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-[25px] w-[min-content]" data-node-id="14:16412">
                Learn alongside others
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16413">
                Join a learning opportunity, ask a question, and share your perspective.
                </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start min-w-px overflow-clip relative" data-node-id="14:16414" data-name="Journey step">
                <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-4xl sm:text-[44px] whitespace-nowrap" data-node-id="14:16415">
                03
                </p>
                <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-node-id="14:16416" data-name="Divider" />
                <p className="[word-break:break-word] font-sans font-bold leading-[1.12] min-w-full not-italic relative shrink-0 text-[#242424] text-[25px] w-[min-content]" data-node-id="14:16417">
                Turn learning into action
                </p>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16418">
                Practice through a project, exchange feedback, and pass something on.
                </p>
            </div>
            </div>
        </div>
        <div className="bg-[#eaf5ed] content-stretch flex flex-col gap-8 items-center overflow-clip px-5 py-12 relative w-full sm:px-8 lg:flex-row lg:gap-16 lg:px-24 lg:py-16" data-node-id="14:16419" data-name="Belonging statement">
            <div className="relative shrink-0 size-[100px]" data-node-id="14:16420" data-name="Community spark">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCommunitySpark} />
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px not-italic overflow-clip relative" data-node-id="14:16421" data-name="Belonging copy">
            <div className="font-sans font-bold leading-[0] relative shrink-0 text-[#242424] text-3xl w-full sm:text-[40px]">
                <p className="leading-[1.12] mb-0">Different majors. Different starting points.</p>
                <p className="leading-[1.12]">A place for all of them.</p>
            </div>
            <p className="font-sans font-normal leading-[1.55] relative shrink-0 text-[#5f6368] text-[18px] w-full" data-node-id="14:16423">
                You don’t have to be the most experienced person in the room. Curiosity, kindness, and a willingness to learn are a good place to start.
            </p>
            </div>
        </div>
        <div className="content-stretch flex flex-col gap-10 items-start overflow-clip px-5 py-14 relative w-full sm:px-8 lg:flex-row lg:gap-24 lg:px-24 lg:py-[88px]" data-node-id="14:16424" data-name="Frequently asked questions">
            <div className="content-stretch flex w-full max-w-[400px] flex-col gap-5 items-start overflow-clip relative shrink-0" data-node-id="14:16425" id="contact" data-name="FAQ introduction">
            <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="14:16426" data-name="Section label">
                <div className="relative shrink-0 size-[7px]" data-node-id="14:16427" data-name="Marker">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                </div>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[12px] uppercase whitespace-nowrap" data-node-id="14:16428">
                A few good questions
                </p>
            </div>
            <div className="[word-break:break-word] font-sans font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#242424] text-4xl sm:text-[48px] w-[min-content]" data-node-id="14:16429">
                <p className="leading-[1.12] mb-0">Wondering where</p>
                <p className="leading-[1.12]">to begin?</p>
            </div>
            <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-node-id="14:16430" data-name="Text link" role="button" tabIndex={0} onClick={() => go('overview')}>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[16px] whitespace-nowrap" data-node-id="14:16431">
                Ask us a question
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="14:16432" data-name="Arrow">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
                </div>
            </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-w-px overflow-clip relative" data-node-id="14:16434" data-name="FAQ answers">
            {faqs.map((f, i) => (
                <div key={f.q} className="flex flex-col gap-[14px] items-start relative shrink-0 w-full">
                <button type="button" aria-expanded={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex gap-[24px] items-center w-full text-left cursor-pointer">
                    <span className="flex-1 font-sans font-medium text-[#242424] text-[20px] hover:text-[#1967d2] transition-colors">{f.q}</span>
                    <span className={`relative shrink-0 size-[24px] transition-transform ${openFaq === i ? 'rotate-180' : ''}`}>
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgDisclosure} />
                    </span>
                </button>
                {openFaq === i && <p className="font-sans font-normal leading-[1.55] text-[#5f6368] text-[16px] w-full">{f.a}</p>}
                <div className="bg-[#dadce0] h-px shrink-0 w-full" />
                </div>
            ))}
            </div>
        </div>
        <div className="content-stretch flex flex-col items-start overflow-clip px-5 py-12 relative w-full sm:px-8 lg:px-24 lg:py-16" data-node-id="14:16456" data-name="Community invitation">
            <div className="bg-[#eaf2ff] content-stretch flex w-full flex-col gap-8 items-start overflow-clip p-6 relative rounded-[32px] sm:p-12 lg:flex-row lg:items-center lg:gap-12" data-node-id="14:16457" data-name="Invitation panel">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] items-start min-w-px overflow-clip relative" data-node-id="14:16458" data-name="Invitation copy">
                <div className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="14:16459" data-name="Section label">
                <div className="relative shrink-0 size-[7px]" data-node-id="14:16460" data-name="Marker">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgMarker} />
                </div>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#5f6368] text-[12px] uppercase whitespace-nowrap" data-node-id="14:16461">
                    Your next chapter
                </p>
                </div>
                <div className="[word-break:break-word] font-sans font-bold leading-[0] min-w-full not-italic relative shrink-0 text-[#242424] text-3xl sm:text-[44px] w-[min-content]" data-node-id="14:16462">
                <p className="leading-[1.12] mb-0">Bring your curiosity.</p>
                <p className="leading-[1.12]">We’ll build from there.</p>
                </div>
                <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[18px] w-[min-content]" data-node-id="14:16463">
                Find a learning track, meet a collaborator, or start a conversation.
                </p>
            </div>
            <div className="content-stretch flex w-full flex-col gap-4 items-start overflow-clip relative shrink-0 sm:w-auto lg:w-[260px]" data-node-id="14:16464" data-name="Invitation actions">
                <div className="bg-[#4284f4] border border-[rgba(255,255,255,0)] border-solid content-stretch flex gap-[16px] h-[52px] items-center overflow-clip px-[24px] relative rounded-[8px] shrink-0 cursor-pointer hover:brightness-95 active:scale-[0.98] transition" data-node-id="14:16465" data-name="Action" role="button" tabIndex={0} onClick={() => go('overview')}>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap" data-node-id="14:16466">
                    Explore the overview
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="14:16467" data-name="Arrow">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow} />
                </div>
                </div>
                <div className="content-stretch flex gap-[12px] items-center overflow-clip relative shrink-0 cursor-pointer hover:opacity-70 transition-opacity" data-node-id="14:16469" data-name="Text link" role="button" tabIndex={0} onClick={() => go('overview')}>
                <p className="[word-break:break-word] font-sans font-medium leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[16px] whitespace-nowrap" data-node-id="14:16470">
                    Talk to the community
                </p>
                <div className="relative shrink-0 size-[20px]" data-node-id="14:16471" data-name="Arrow">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgArrow1} />
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
        <div className="bg-[#f1f3f4] content-stretch flex flex-col gap-10 items-start overflow-clip pb-7 pt-14 px-5 relative w-full sm:px-8 lg:px-24" data-node-id="14:16473" data-name="Footer">
        <div className="content-stretch flex w-full flex-col items-start justify-between gap-10 overflow-clip md:flex-row" data-node-id="14:16474" data-name="Footer content">
            <div className="content-stretch flex w-full max-w-[480px] flex-col gap-6 items-start overflow-clip relative shrink-0" data-node-id="14:16475" data-name="Community identity">
            <div className="content-stretch flex gap-2 items-center relative shrink-0 sm:gap-[12.49px]" data-node-id="14:16476" data-name="GDGoC UGM identity">
                <div className="relative h-8 w-[58px] shrink-0 sm:h-[42.199px] sm:w-[76.32px]" data-node-id="I14:16476;156:48312" data-name="Rectangle">
                <img alt="" className="absolute block inset-0 max-w-none size-full" height="42.199" src={imgRectangle1} width="76.32" />
                </div>
                <div className="relative h-8 w-[min(60vw,293px)] shrink-0 sm:h-[42.72px] sm:w-[292.761px]" data-node-id="I14:16476;156:48313" data-name="Google Developer Groups On Campus • Universitas Gadjah Mada">
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGoogleDeveloperGroupsOnCampusUniversitasGadjahMada1} />
                </div>
            </div>
            <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[16px] w-[min-content]" data-node-id="14:16479">
                A student community for curious minds, shared learning, and technology with purpose.
            </p>
            </div>
            <div className="[word-break:break-word] content-stretch flex flex-col gap-[14px] items-start leading-[normal] not-italic overflow-clip relative shrink-0 w-[150px] whitespace-nowrap" data-node-id="14:16480" data-name="Explore">
            <p className="font-sans font-bold relative shrink-0 text-[16px] text-black" data-node-id="14:16481">
                Explore
            </p>
            <p className="font-sans font-normal relative shrink-0 text-[#5f6368] text-[15px]" data-node-id="14:16482">
                Home
            </p>
            <p className="font-sans font-normal relative shrink-0 text-[#5f6368] text-[15px]" data-node-id="14:16483">
                About
            </p>
            <p className="font-sans font-normal relative shrink-0 text-[#5f6368] text-[15px]" data-node-id="14:16484">
                Overview
            </p>
            <p className="font-sans font-normal relative shrink-0 text-[#5f6368] text-[15px]" data-node-id="14:16485">
                Contact
            </p>
            </div>
            <div className="content-stretch flex flex-col gap-[16px] items-start overflow-clip relative shrink-0 w-full md:w-[260px]" data-node-id="14:16486" data-name="Connect">
            <p className="[word-break:break-word] font-sans font-bold leading-[normal] not-italic relative shrink-0 text-[16px] text-black whitespace-nowrap" data-node-id="14:16487">
                Keep in the loop
            </p>
            <p className="[word-break:break-word] font-sans font-normal leading-[normal] not-italic relative shrink-0 text-[#1967d2] text-[18px] whitespace-nowrap" data-node-id="14:16488">
                @gdgoc.ugm
            </p>
            <div className="content-stretch flex gap-[16px] items-start overflow-clip relative shrink-0" data-node-id="14:16489" data-name="Social channels">
                <div className="relative shrink-0 size-[24px]" data-node-id="14:16490" data-name="Instagram">
                <div className="absolute inset-[14.58%]" data-node-id="I14:16490;156:47462" data-name="Group">
                    <div className="absolute inset-[-4.41%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup14} />
                    </div>
                </div>
                </div>
                <div className="relative shrink-0 size-[24px]" data-node-id="14:16495" data-name="YouTube">
                <div className="absolute inset-[20.91%_10.21%]" data-node-id="I14:16495;156:48221" data-name="Group">
                    <div className="absolute inset-[-5.37%_-3.93%]">
                    <img alt="" className="block max-w-none size-full" src={imgGroup15} />
                    </div>
                </div>
                </div>
            </div>
            <p className="[word-break:break-word] font-sans font-normal leading-[1.55] min-w-full not-italic relative shrink-0 text-[#5f6368] text-[14px] w-[min-content]" data-node-id="14:16499">
                Learn together. Build together.
            </p>
            </div>
        </div>
        <div className="bg-[#dadce0] h-px relative shrink-0 w-full" data-node-id="14:16500" data-name="Divider" />
        <div className="[word-break:break-word] content-stretch flex flex-col gap-2 font-sans font-normal items-start justify-between leading-[normal] not-italic overflow-clip relative shrink-0 text-[#5f6368] text-[12px] w-full sm:flex-row sm:gap-4">
            <p className="relative shrink-0" data-node-id="14:16502">
            © GDGoC Universitas Gadjah Mada • 2026/2027
            </p>
            <p className="relative shrink-0" data-node-id="14:16503">
            Made for the campus. Open to possibilities.
            </p>
        </div>
        <div className="content-stretch flex h-[4px] items-start overflow-clip relative shrink-0 w-[160px]" data-node-id="14:16504" data-name="Brand signature">
            <div className="bg-[#4284f4] flex-[1_0_0] h-[4px] min-w-px relative" data-node-id="14:16505" data-name="Brand segment" />
            <div className="bg-[#ea4335] flex-[1_0_0] h-[4px] min-w-px relative" data-node-id="14:16506" data-name="Brand segment" />
            <div className="bg-[#f9ab00] flex-[1_0_0] h-[4px] min-w-px relative" data-node-id="14:16507" data-name="Brand segment" />
            <div className="bg-[#34a853] flex-[1_0_0] h-[4px] min-w-px relative" data-node-id="14:16508" data-name="Brand segment" />
        </div>
        </div>
    </div>
    );
}