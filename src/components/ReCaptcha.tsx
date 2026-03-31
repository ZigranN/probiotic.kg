"use client";

import ReCAPTCHA from "react-google-recaptcha";
import { useRef } from "react";

interface ReCaptchaProps {
    onVerify: (token: string | null) => void;
}

export default function ReCaptcha({ onVerify }: ReCaptchaProps) {
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    if (!siteKey) {
        console.warn("reCAPTCHA site key не настроен");
        return null;
    }

    return (
        <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={siteKey}
            onChange={onVerify}
            theme="light"
        />
    );
}
