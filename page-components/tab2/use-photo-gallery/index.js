import { useState, useEffect } from 'react';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';
import { Capacitor } from '@capacitor/core';

import {
	isPlatform,
} from '@ionic/react';

export function usePhotoGallery() {
	const takePhoto = async () => {
		const photo = await Camera.getPhoto({
			resultType: CameraResultType.Uri,
			source: CameraSource.Camera,
			quality: 100,
		});
	};

	return {
		takePhoto,
	};
}
