function solution(order) {
    let container = []
    let subContainer = []
    let pos = 0
    let max = 0
    for(let i=0; i< order.length; i++){
        max = Math.max(max, order[i])
    }

    for (let i = 1; i <= max; i++) {
        if (order[pos] === i) {
            container.push(i)
            pos++
            while (pos < order.length && subContainer.length) {
                if (order[pos] === subContainer.at(-1)) {
                    container.push(subContainer.pop())
                    pos++
                } else break
            }
        } else {
            subContainer.push(i)
        }
    }

    while (pos < order.length && subContainer.length) {
        if (subContainer.at(-1) === order[pos]) {
            container.push(subContainer.pop())
            pos++
        } else break
    }

    return container.length
}

