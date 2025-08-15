import React from "react";

interface Props {
    params: Promise<{ id: string; photoId: string }>;
}

const PhotoPage = async ({ params }: Props) => {
    const { id, photoId } = await params; // both are strings from URL

    const numericId = Number(id);
    const numericPhotoId = Number(photoId);

    return (
        <div>
            PhotoPage: {numericId}, {numericPhotoId}
        </div>
    );
};

export default PhotoPage;
