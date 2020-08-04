import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import 'typeface-noto-sans-kr';

const GlobalStyles = createGlobalStyle`
    ${reset}

    * {
        box-sizing:border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: 'Noto Sans KR', sans-serif;
        font-size: 1.6rem;
    }

    /* dl,
    dt,
    dd,
    article,
    aside,
    canvas,
    details,
    embed,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section,
    summary {
        display: block;
    }
    command,
    datalist,
    keygen,
    mark,
    meter,
    progress,
    rp,
    rt,
    ruby,
    time,
    wbr {
        display: inline;
    }
    img {
        border: 0;
    }
    fieldset {
        border: 0;
    }
    
    svg:not(:root) {
        overflow: hidden;
    }
    small {
        font-size: 80%;
    }
    sub,
    sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline;
    }
    sup {
        top: -0.5em;
    }
    sub {
        bottom: -0.25em;
    }
    ul,
    ol,
    li {
        list-style: none;
        cursor: default;
    }
    hr {
        display: none;
        border: 0;
    }
    pre {
        white-space: pre-wrap;
    }
    legend,
    caption {
        display: none;
        clear: both;
    }
    a {
        color: inherit;
        cursor: pointer;
    }
    a:link {
        text-decoration: none;
    }
    a:hover,
    a:focus,
    a:active {
        text-decoration: none;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-size: 100%;
        font-weight: normal;
        word-break: keep-all;
        cursor: default;
    }
    p {
        word-break:keep-all;
        word-wrap:break-word;
        cursor: default;
    }
    span {
        cursor: default;
    }
    em,
    i,
    address,
    cite {
        font-style: normal;
        font-weight: normal;
    }
    input,
    textarea,
    select,
    button,
    table {
        border: 0;
        background-color: transparent;
        font-size: inherit;
        font-family: inherit;
    }
    button,
    html input[type='button'],
    input[type='reset'],
    input[type='submit'] {
        -webkit-appearance: button;
        cursor: pointer;
    }
    button[disabled],
    html input[disabled] {
        cursor: default;
    }
    button,
    select {
        text-transform: none;
    }
    button {
        padding: 0;
        
        &:focus {
            outline:0;
        }
    }
    textarea,
    input,
    select {
        border: 0;
        border-radius: 0;
        -webkit-border-radius: 0;
        -ms-border-radius: 0;
        -moz-border-radius: 0;
        outline-style: none;
        outline-width: medium;
    }
    textarea {
        resize: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    th,
    td {
        padding: 0;
        border-collapse: collapse;
    }
    select {
        box-sizing: border-box;
        -webkit-appearance: none;
        -ms-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    textarea {
        color: inherit;
    }
    textarea:focus::-webkit-input-placeholder {
        color: transparent;
    }
    textarea:focus:-moz-placeholder {
        color: transparent;
    }
    textarea:focus::-moz-placeholder {
        color: transparent;
    }
    textarea:focus:-ms-input-placeholder {
        color: transparent;
    }
    input,
    input::-webkit-input-placeholder,
    input::-moz-placeholder,
    input:-ms-input-placeholder,
    input:-moz-placeholder {
        color: inherit;
    }
    input:focus::-webkit-input-placeholder {
        color: transparent;
    }
    input:focus:-moz-placeholder {
        color: transparent;
    }
    input:focus::-moz-placeholder {
        color: transparent;
    }
    input:focus:-ms-input-placeholder {
        color: transparent;
    }
    input:-webkit-autofill,
    textarea:-webkit-autofill,
    select:-webkit-autofill {
        -webkit-text-fill-color: inherit;
        box-shadow: 0 0 0 100rem white inset;
        -webkit-box-shadow: 0 0 0 100rem white inset;
    }
    input[type='reset'],
    input[type='button'],
    input[type='submit'] {
        line-height: normal;
    }
    input[type='button'],
    input[type='text'],
    input[type='image'],
    input[type='submit'] {
        -webkit-appearance: none;
    }
    input[type="checkbox"],
    input[type="radio"] {
        padding: 0;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
    }
    input[type='date']::-webkit-clear-button {
        display: none;
    }
    input[type='date']::-webkit-inner-spin-button {
        display: none;
    }
    input[type='date']::-webkit-calendar-picker-indicator {
        background: #fff;
        color: #343434;
    }
    input[type='date'] {
        visibility: visible;
        display: inline-block;
        appearance: none;
        -webkit-appearance: none;
    }
    input[type='date'],
    input:focus {
        box-shadow: none;
        -webkit-box-shadow: none;
        -moz-box-shadow: none;
    }
    input[type='search'] {
        box-sizing: content-box;
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        -webkit-appearance: textfield;
    }
    input[type='search']::-webkit-search-cancel-button,
    input[type='search']::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    input[type="search"] {
        box-sizing: content-box;
        -moz-box-sizing: content-box;
        -webkit-box-sizing: content-box;
        -webkit-appearance: textfield;
    }
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none;
    }
    input[type="number"]::-webkit-inner-spin-button,
    input[type="number"]::-webkit-outer-spin-button {
        height: auto;
    }
    [hidden] {
        display: none;
    } */
`;

export default GlobalStyles;
