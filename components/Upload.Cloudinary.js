export const uploadCloudinary = async (imageUri) => {
    try {
        const cloudName = 'dicmgelyy';
        const unsignedUploadPreset = 'Imagenes';
        const apiUrl = 'https://api.cloudinary.com/v1_1/' + cloudName + '/image/upload';

        const formData = new FormData()

        formData.append('file', {
            uri: imageUri,
            type: 'image/jpg',
            name: 'Img.jpg'
        })

        formData.append('upload_preset', unsignedUploadPreset)
        formData.append('ngrok-skip-browser-warning', true);

        const response = await fetch(apiUrl, {
            method: 'POST',
            body: formData
        })
        
        if(response.ok){
            const data = await response.json()
            if(data.secure_url){
                const imagenUrl = data.secure_url
                console.log('Imagen subida a claudinary:', imagenUrl)
                
                return imagenUrl;
            }
            else{
                console.log('Error al subir la imagen a Cloudinary: la URL segura no está disponible')
                return null
            }
        }
        else{
            console.log('Error al subir la imagen a Cloudinary:', response.status, response.statusText)
            return null
        }
    } catch (error) {
        console.log('Error al subir la imagen a Cloudinary:', error)
        return null
    }

}
   