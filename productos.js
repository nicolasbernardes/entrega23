const Router = require('koa-router')


const router = new Router({
    prefix:"/productos"
})

let dataDb = []


router.post("/", ctx =>{
    try {
        let { nombre,  tipo, precio } = ctx.request.body
        if(!nombre || !tipo || !precio){
            return ctx.body = { status: 400, descripcion: "enviar datos completos"}
        }
        let id =  dataDb.length > 0 ?
        dataDb.reduce((p,a,i) =>{
            return i == 0 ? a.id : p.id > a.id ? p.id : a.id;
        }, {}) :1;

        dataDb.push({id:Number(id), nombre, tipo , precio})
        ctx.body = {
            descripcion: "se ha agregado bien",
            productos: dataDb
        }

        
    } catch (error) {
        console.log(error)
    }
})

router.get("/", ctx =>{
    try {
     
        ctx.body = {
            descripcion: "encontro",
            productos: dataDb
        }

        
    } catch (error) {
        console.log(error)
    }
})

router.get("/:id", ctx =>{
    try {
        let { id } = ctx.params
        let producto = dataDb.filter(producto => producto.id == Number(id))
        ctx.body = {
            descripcion: "encontro",
            producto
        }
        
    } catch (error) {
        console.log(error)
    }
})



module.exports = router