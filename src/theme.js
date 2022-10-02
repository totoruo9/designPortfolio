export const lightTheme = {
    color: {
        gray100: '#FBFBFF',
        gray200: '#eaeaea',
        gray300: '#aaa',
        gray400: '#ddd',
        gray500: '#767676',
        gray600: '#555',
        gray700: '#333',
        gray900: '#1c1c1c',
        point: '#0000ff',
        sub: '#ff4a5b'
    },
    fontSize: {
        default: '18px',
        title: '24px'
    },
    maxWidth: '1556px',
};

const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '1920px',
    desktopL: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`
};