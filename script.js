const calcular = document.getElementById("calcular")
calcular.addEventListener("click", function(e){
    e.preventDefault()
    const va = document.getElementById("valordea") 
    const a = va.value
    const vb = document.getElementById("valordeb")
    const b = vb.value
    const vc = document.getElementById("valordec")
    const c = vc.value

    const delta = b * b - 4 * a *c

    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)

    const x1r = document.getElementById("x1s")
    const x2r = document.getElementById("x2s")
    const deltar = document.getElementById("deltas")

    console.log(x1)
    console.log(x2)
    if (!a || !c || !b) {
        window.alert('[erro] verifique os valores e tente novamente')
    }
    if (a == 0 ) {
        window.alert('[Erro]O valor de a, deve ser diferente de 0')
    }
    if (delta < 0) {
        window.alert('[Erro] Sem raízes reais')
    }
    else {
        x1r.innerHTML= x1
        x2r.innerHTML= x2
        deltar.innerHTML = delta
    }
    

})
