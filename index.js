const textElement = document.getElementById('text')
const routeGridElement = document.getElementById('route-grid')

let state = {}




function showTextNode(textNodeIndex){
    const textNode= textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText= textNode.text 
    while (routeGridElement.firstChild){
        routeGridElement.removeChild(routeGridElement.firstChild)
    }
    textNode.options.forEach(option => {
        if (showOption(option)){
            const button= document.createElement('button')
            button.innerText=option.text
            button.classList.add('b')
        }
    })
}

function selectOption(option){
    return true

}

const textNodes=[
    {
        id: 1,
        text: 'Its lunch time and you decide to get something to eat when you see a glorious $100 bill in the middle of the road.',
        options: [
            {
                text: 'take the $100',
                setState: {$100bill: true},
                nextText:2
            },
            {
                text: 'leave the $100',
                nextText: 2
            }

        ]
    },
    {
        id: 2,
    }
]
showTextNode(1)
