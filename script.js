if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(reg=>console.log('Se registro correctamente',reg))
    .catch(err=>console.log('Error al registrar',err))
}
