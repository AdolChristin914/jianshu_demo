/*
 * @Descripttion:icon-font全局css
 * @version: v1.0
 * @Author: yyp
 * @Date: 2020-04-17 16:34:12
 * @LastEditors: yyp
 * @LastEditTime: 2020-04-22 09:23:25
 */

import { createGlobalStyle } from 'styled-components'

const IconFontStyle = createGlobalStyle`
    @font-face {font-family: "iconfont";
        src: url('//at.alicdn.com/t/font_1762414_rl4688wkm2.eot?t=1587346958265'); /* IE9 */
        src: url('//at.alicdn.com/t/font_1762414_rl4688wkm2.eot?t=1587346958265#iefix') format('embedded-opentype'), /* IE6-IE8 */
        url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAATQAAsAAAAACgAAAASBAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDOAqHAIYrATYCJAMYCw4ABCAFhG0HXBvVCBGVnG3JfiQYN5b/D0ItycaVHSVPcj48u/o/F7VpDTQ9cQE2D/AHyBan43yJMESYXcl1zPN86dJ2N+vlNEAAwdz/OWa6pInkB5rY3hAymor2Blg2oIFFxGFRBdidprCfCezq6oUt2IeBAFAQhASQiqqGDkjgoFEEAOnv6VoPyaMCT8gmkEAgRizkIIcgQKK76bMADhqfT75BGpEACoGBJrZ0Vm5Cyef4/A9mWiZWaQiwqzMAuC0DGIAEABwg/ZGmTjArlAAG5ZPIkQdA4m4U+Jx8Pvz5H5Yl0iEeAmco/+RJUKABoCBg4BAAIoJEGrANYQH4HAp7KtkQwhAPQQEG8TAU4BD/gSIIAACxwgGtAHEAyBRIkiD9ehQcxZDAvTRJ8lQJcOH8YjLRNFd5zvbAG+T1122vvtrx2mv6G28U68f3XmMfNQWGmxFyKa+/PqDYtA5lTl294kyQcs5n2cAz6l5AIcqDyp6Xid0w7MYXb9BvvRPmXereVwiZU4n2aRR2nXxDfyT99Vc9IDIuT2Lc8Ej0h18uU1cee8244pXk11+dcZFdp50dnNarVLEV6wVFRmPHOmc4rb/8fvsDe+8z77XNddtre+MNfVB8w72lftxj2TGPdcdOnPBeedJ748njHXuuNK8a6sSrs1Kq9h+ojx4oogcfuP8gY8X996uKQ/c7G5RgOP7x/ft3esHrzkE6fcEF03DQCy+guvLCC8V3ccGFeCt9rO37lsbvx9zLu4cavWZ6W/qosWm610dYW7V12wfFmXRVbeZryeunnPuc9LrS2t5NjzkF+BYHxXXHh4L9sjaIqAUGcXwt5CEo9sV1zu56Ql/m6/5Hu8sZtXTq3tblLsWj5XST4hJuFjZrm+8q2uX7ztyy6IKb43hf6Laov//4osP1rIacB01XuCa8cu/u6d1x91SEVRy0W1ddZQUpfGf5Iu323RW7y0/f2Jm3OXdzXmdAOUJYyX3833/5fUzXGGqJE1d2AXvlFQb+BRIDPGlB5dHIiKOhbqGhR8sui/GwUku3fHy321Q4mzEPujjrZwCsZ9j/LBOwLmQfsnWAZbJ9zASsBxkkJefp38Cp9cIv1zoX/CapHAMA8PYjOyfDaZlcdvbJxv6wz0p2xir+5ZJa3LuyMgQEIFrvsgMNgMJa4HyMAW7er0rimTkAEJKHfQPKQSAwkggkxyaAQJUBIkkxKOJVL1e5GzVFJgOIs10AwsUNQDl5ABgXzyE59j0QePkORC4xUNhy31AVVY9SPorMYQnvH1SceiFr3cbMvqH0LTNuroF/obGVF7KkFH+0wB5NFVNskLlzAoShDq7Ccdi2BIOhGrmLlXPDPknujLqhmFM32ihnIMZBJbDBD+jBkZ7Q6jubwMffIMlrMSah4ofyBRlW1TlIlSQlA7IQ9ZkqdqX7mEDKjXOENKyTQTqgCgbUcoiA4eh+NcQ5se4CgcFeslirM6sobl7SreU2AAXdghgljHAiEJE4QPyQt54mpevnIxNV225bLJFHVpGvq2/F/qxaTm3SwKwdjQAAAAA=') format('woff2'),
        url('//at.alicdn.com/t/font_1762414_rl4688wkm2.woff?t=1587346958265') format('woff'),
        url('//at.alicdn.com/t/font_1762414_rl4688wkm2.ttf?t=1587346958265') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
        url('//at.alicdn.com/t/font_1762414_rl4688wkm2.svg?t=1587346958265#iconfont') format('svg'); /* iOS 4.1- */
    }


    [class^="icon-"],
    [class*=" icon-"] {
        /* use !important to prevent issues with browser extensions that change fonts */
        font-family: 'iconfont' !important;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;

        /* Better Font Rendering =========== */
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-Aa:before {
        content: "\\e600";
    }

    .icon-quill:before {
        content: "\\e66f";
    }

    .icon-ledec-shoujixiazai:before {
        content: "\\e670";
    }

    .icon-compass:before {
        content: "\\e6f7";
    }

    .icon-sousuo:before {
        content: "\\e601";
    }

`

export default IconFontStyle
