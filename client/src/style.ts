const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",
    heading2: "font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full",
    paragraph: "font-poppins font-normal text-dimWhite text-[18px] leading-[30.8px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",
    flexEnd: "flex justify-center items-end",
    flexBetween: "flex justify-between items-center",

    paddingX: "sm:px-16 px-6",
    paddingY: "sm:py-16 py-6",
    padding: "sm:px-16 px-6 sm:py-12 py-4",

    marginX: "sm:mx-16 mx-6",
    marginY: "sm:my-16 my-6"
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export const searchBar = {
    btn: `bg-blue-700 hover:bg-blue-600 click:bg-blue-900 text-white font-bold p-2 rounded-md w-1/8`,
    input: `bg-slate-700 hover:bg-slate-600 text-slate-100 p-2 rounded-md w-11/12`,
}

export const gridItem = {
    card: 'bg-slate-900 shadow-xl relative rounded-lg text-center overflow-hidden h-96 w-80 mx-auto p-4 cursor-pointer'
}

export const modal = {
    btn: `bg-red-700 hover:bg-red-800 click:bg-red-600 text-white font-bold p-2 rounded-md `,
    container: 'container  h-1/2 bg-slate-700 p-4 rounded-md flex',
    header: 'text-lg font-bold color-slate-800',
    body: 'p-4 w-full h-full',
}

export const pagination = {
        activeBtn: 'bg-blue-700 hover:bg-blue-800 click:bg-blue-600 text-white font-bold p-2 rounded-md',
        btn: 'bg-slate-700 hover:bg-slate-800 click:bg-slate-600 text-white font-bold p-2 rounded-md',
}

export default styles;