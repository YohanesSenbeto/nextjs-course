"use client";
import React, { useState } from "react";
import { CldUploadWidget, CldImage } from "next-cloudinary";

interface cloudinaryResult {
    public_id: string;
}

const UploadPage = () => {
    const [publicId, setPublicId] = useState("");
    return (
        <>
            {publicId && (
                <CldImage
                    src={publicId}
                    width={270}
                    height={180}
                    alt="A John Image"
                />
            )}
            <CldUploadWidget
                uploadPreset="next-app"
                onSuccess={(result, _widget) => {
                    if (result.event !== "success") return;
                    const info = result.info as cloudinaryResult;
                    setPublicId(info.public_id);
                }}
            >
                {({ open }) => (
                    <button onClick={() => open()} className="btn btn-primary">
                        Upload
                    </button>
                )}
            </CldUploadWidget>
        </>
    );
};

export default UploadPage;
