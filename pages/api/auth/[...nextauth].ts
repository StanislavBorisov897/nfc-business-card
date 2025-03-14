<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        :root {
            --border-width: 1px;
            --border-radius: 0.5rem;
            --color-error: #c94b4b;
            --color-info: #157efb;
            --color-info-hover: #0f6ddb;
            --color-info-text: #fff
        }

        .__next-auth-theme-auto,
        .__next-auth-theme-light {
            --color-background: #ececec;
            --color-background-hover: hsla(0, 0%, 93%, .8);
            --color-background-card: #fff;
            --color-text: #000;
            --color-primary: #444;
            --color-control-border: #bbb;
            --color-button-active-background: #f9f9f9;
            --color-button-active-border: #aaa;
            --color-separator: #ccc
        }

        .__next-auth-theme-dark {
            --color-background: #161b22;
            --color-background-hover: rgba(22, 27, 34, .8);
            --color-background-card: #0d1117;
            --color-text: #fff;
            --color-primary: #ccc;
            --color-control-border: #555;
            --color-button-active-background: #060606;
            --color-button-active-border: #666;
            --color-separator: #444
        }

        @media (prefers-color-scheme:dark) {
            .__next-auth-theme-auto {
                --color-background: #161b22;
                --color-background-hover: rgba(22, 27, 34, .8);
                --color-background-card: #0d1117;
                --color-text: #fff;
                --color-primary: #ccc;
                --color-control-border: #555;
                --color-button-active-background: #060606;
                --color-button-active-border: #666;
                --color-separator: #444
            }

            a.button,
            button {
                background-color: var(--provider-dark-bg, var(--color-background));
                color: var(--provider-dark-color, var(--color-primary))
            }

            a.button:hover,
            button:hover {
                background-color: var(--provider-dark-bg-hover, var(--color-background-hover)) !important
            }

            #provider-logo {
                display: none !important
            }

            #provider-logo-dark {
                display: block !important;
                width: 25px
            }
        }

        html {
            box-sizing: border-box
        }

        *,
        :after,
        :before {
            box-sizing: inherit;
            margin: 0;
            padding: 0
        }

        body {
            background-color: var(--color-background);
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
            margin: 0;
            padding: 0
        }

        h1 {
            font-weight: 400
        }

        h1,
        p {
            color: var(--color-text);
            margin-bottom: 1.5rem;
            padding: 0 1rem
        }

        form {
            margin: 0;
            padding: 0
        }

        label {
            font-weight: 500;
            margin-bottom: .25rem;
            text-align: left
        }

        input[type],
        label {
            color: var(--color-text);
            display: block
        }

        input[type] {
            background: var(--color-background-card);
            border: var(--border-width) solid var(--color-control-border);
            border-radius: var(--border-radius);
            box-sizing: border-box;
            font-size: 1rem;
            padding: .5rem 1rem;
            width: 100%
        }

        input[type]:focus {
            box-shadow: none
        }

        p {
            font-size: 1.1rem;
            line-height: 2rem
        }

        a.button {
            line-height: 1rem;
            text-decoration: none
        }

        a.button:link,
        a.button:visited {
            background-color: var(--color-background);
            color: var(--color-primary)
        }

        button span {
            flex-grow: 1
        }

        a.button,
        button {
            align-items: center;
            background-color: var(--provider-bg);
            border-color: rgba(0, 0, 0, .1);
            border-radius: var(--border-radius);
            color: var(--provider-color, var(--color-primary));
            display: flex;
            font-size: 1.1rem;
            font-weight: 500;
            justify-content: center;
            min-height: 62px;
            padding: .75rem 1rem;
            position: relative;
            transition: all .1s ease-in-out
        }

        a.button:hover,
        button:hover {
            background-color: var(--provider-bg-hover, var(--color-background-hover));
            cursor: pointer
        }

        a.button:active,
        button:active {
            cursor: pointer
        }

        a.button #provider-logo,
        button #provider-logo {
            display: block;
            width: 25px
        }

        a.button #provider-logo-dark,
        button #provider-logo-dark {
            display: none
        }

        #submitButton {
            background-color: var(--brand-color, var(--color-info));
            color: var(--button-text-color, var(--color-info-text));
            width: 100%
        }

        #submitButton:hover {
            background-color: var(--button-hover-bg, var(--color-info-hover)) !important
        }

        a.site {
            color: var(--color-primary);
            font-size: 1rem;
            line-height: 2rem;
            text-decoration: none
        }

        a.site:hover {
            text-decoration: underline
        }

        .page {
            box-sizing: border-box;
            display: grid;
            height: 100%;
            margin: 0;
            padding: 0;
            place-items: center;
            position: absolute;
            width: 100%
        }

        .page>div {
            text-align: center
        }

        .error a.button {
            margin-top: .5rem;
            padding-left: 2rem;
            padding-right: 2rem
        }

        .error .message {
            margin-bottom: 1.5rem
        }

        .signin input[type=text] {
            display: block;
            margin-left: auto;
            margin-right: auto
        }

        .signin hr {
            border: 0;
            border-top: 1px solid var(--color-separator);
            display: block;
            margin: 2rem auto 1rem;
            overflow: visible
        }

        .signin hr:before {
            background: var(--color-background-card);
            color: #888;
            content: "or";
            padding: 0 .4rem;
            position: relative;
            top: -.7rem
        }

        .signin .error {
            background: #f5f5f5;
            background: var(--color-error);
            border-radius: .3rem;
            font-weight: 500
        }

        .signin .error p {
            color: var(--color-info-text);
            font-size: .9rem;
            line-height: 1.2rem;
            padding: .5rem 1rem;
            text-align: left
        }

        .signin form,
        .signin>div {
            display: block
        }

        .signin form input[type],
        .signin>div input[type] {
            margin-bottom: .5rem
        }

        .signin form button,
        .signin>div button {
            width: 100%
        }

        .signin .provider+.provider {
            margin-top: 1rem
        }

        .logo {
            display: inline-block;
            margin: 1.25rem 0;
            max-height: 70px;
            max-width: 150px
        }

        .card {
            background-color: var(--color-background-card);
            border-radius: 2rem;
            padding: 1.25rem 2rem
        }

        .card .header {
            color: var(--color-primary)
        }

        .section-header {
            color: var(--color-text)
        }

        @media screen and (min-width:450px) {
            .card {
                margin: 2rem 0;
                width: 368px
            }
        }

        @media screen and (max-width:450px) {
            .card {
                margin: 1rem 0;
                width: 343px
            }
        }
    </style>
    <title>Sign In</title>
</head>

<body class="__next-auth-theme-auto">
    <div class="page">
        <div class="signin">
            <div class="card">
                <div class="provider">
                    <form action="http://localhost:3000/api/auth/signin/google" method="POST">
                        <input type="hidden" name="csrfToken" value="7150c4847633efe7f8aae320821d59d18e7f7e2a01cf870b4fc7289685029aa2" /><input type="hidden" name="callbackUrl" value="http://localhost:3000" /><button type="submit" class="button" style="--provider-bg: #fff; --provider-dark-bg: #fff; --provider-color: #000; --provider-dark-color: #000; --provider-bg-hover: rgba(255, 255, 255, 0.8); --provider-dark-bg-hover: rgba(255, 255, 255, 0.8);"><img loading="lazy" height="24" width="24" id="provider-logo" src="https://authjs.dev/img/providers/google.svg" /><img loading="lazy" height="24" width="24" id="provider-logo-dark" src="https://authjs.dev/img/providers/google.svg" /><span>Sign in with Google</span></button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</body>

</html>