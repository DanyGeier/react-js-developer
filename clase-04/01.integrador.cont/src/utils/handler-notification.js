import Swal from "sweetalert2"

const handlerNotification = async (callback) => {
    try {
        const result = await Swal.fire({
            title: "¿Estás seguro?",
            text: "Mira que no se va a volver a ver ese producto",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, papaaaaa!",
            cancelButtonText: "Nooooooooooooooooooooo"
        })

        console.log(result)
        const isDelete = await result

        if ( isDelete.isConfirmed ) {
            callback()

            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
            })
        };

    } catch (error) {
        console.error(error)
    }

}

export default handlerNotification