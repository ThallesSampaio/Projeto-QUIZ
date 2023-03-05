var nota = 0
var keep
var computed
var keep2
var keep3


function start() {

    /*REMOVE O ELEMENTO START*/
    var start = document.querySelector('h1.start')
    start.remove()

    /*INSERE A PRIMEIRA PERGUNTA*/
    var question = document.querySelector('div.question')
    var p1 = document.createElement('p')
    p1.setAttribute('class', 'pergunta')
    p1.textContent = `5+3`
    question.appendChild(p1)

    /*INSERA AS RESPOSTAS*/

    var r1 = document.createElement('p')
    r1.setAttribute('class', 'resposta')
    r1.textContent = `7`
    question.appendChild(r1)
    r1.addEventListener('click', fr1)
    function fr1() {
        exec1()
        keep1()
    }

    var r2 = document.createElement('p')
    r2.setAttribute('class', 'resposta')
    r2.textContent = `8`
    question.appendChild(r2)
    r2.addEventListener('click', fr2)
    function fr2() {
        nota++
        exec1()
        keep1()
    }

    var r3 = document.createElement('p')
    r3.setAttribute('class', 'resposta')
    r3.textContent = `53`
    question.appendChild(r3)
    r3.addEventListener('click', fr3)
    function fr3() {
        exec1()
        keep1()
    }

    function exec1() {
        p1.remove();
        r1.remove();
        r2.remove();
        r3.remove();
        computed = document.createElement('p')
        computed.setAttribute('class', 'pergunta')
        computed.textContent = `Resposta computada!`
        question.appendChild(computed)
    }

    function keep1() {
        keep = document.createElement('p')
        keep.setAttribute('class', 'resposta')
        keep.textContent = `Continuar`
        question.appendChild(keep);
        keep.addEventListener('click', p2)
    }

    function p2() {
        computed.remove()
        keep.remove()

        var question = document.querySelector('div.question')
        p1 = document.createElement('p')
        p1.setAttribute('class', 'pergunta')
        p1.textContent = `75x100`
        question.appendChild(p1)

        var r1p2 = document.createElement('p')
        r1p2.setAttribute('class', 'resposta')
        r1p2.textContent = `(A) 7500`
        question.appendChild(r1p2)
        r1p2.addEventListener('click', fr1p2); function fr1p2() {
            nota++
            exec2()
            keep2()
        }

        var r2p2 = document.createElement('p')
        r2p2.setAttribute('class', 'resposta')
        r2p2.textContent = `(B) 75100`
        question.appendChild(r2p2)
        r2p2.addEventListener('click', fr2p2); function fr2p2() {
            exec2()
            keep2()
        }

        var r3p2 = document.createElement('p')
        r3p2.setAttribute('class', 'resposta')
        r3p2.textContent = `(C) 750000`
        question.appendChild(r3p2)
        r3p2.addEventListener('click', fr3p2); function fr3p2() {
            exec2()
            keep2()
        }
        function exec2() {
            p1.remove(); r1p2.remove(); r2p2.remove(); r3p2.remove()
            computed = document.createElement('p')
            computed.setAttribute('class', 'pergunta')
            computed.textContent = `Resposta computada!`
            question.appendChild(computed)
            console.log(nota)
        }
        function keep2() {
            keep2 = document.createElement('p')
            keep2.setAttribute('class', 'resposta')
            keep2.textContent = `Continuar`
            question.appendChild(keep2);
            keep2.addEventListener('click', p3)
        }

        function p3() {
            computed.remove()
            keep2.remove()

            var question = document.querySelector('div.question')
            p1 = document.createElement('p')
            p1.setAttribute('class', 'pergunta')
            p1.textContent = `10/5`
            question.appendChild(p1)

            var r1p3 = document.createElement('p')
            r1p3.setAttribute('class', 'resposta')
            r1p3.textContent = `(A) 105`
            question.appendChild(r1p3)
            r1p3.addEventListener('click', fr1p3); function fr1p3() {
                exec3()
                keep3()
            }

            var r2p3 = document.createElement('p')
            r2p3.setAttribute('class', 'resposta')
            r2p3.textContent = `(B) 2`
            question.appendChild(r2p3)
            r2p3.addEventListener('click', fr2p3); function fr2p3() {
                nota++
                exec3()
                keep3()
            }

            var r3p3 = document.createElement('p')
            r3p3.setAttribute('class', 'resposta')
            r3p3.textContent = `(C) 10`
            question.appendChild(r3p3)
            r3p3.addEventListener('click', fr3p3); function fr3p3() {
                exec3()
                keep3()
            }

            function exec3() {
                p1.remove(); r1p3.remove(); r2p3.remove(); r3p3.remove();
                computed = document.createElement('p')
                computed.setAttribute('class', 'pergunta')
                computed.textContent = `Parabéns! Você respondeu todas questões!`
                question.appendChild(computed)
                console.log(nota)
            }
            function keep3() {
                keep3 = document.createElement('p')
                keep3.setAttribute('class', 'resposta')
                keep3.textContent = `Finalizar`
                question.appendChild(keep3)
                keep3.addEventListener('click', finishscreen)
            }
            function finishscreen() {
                computed.remove()
                keep3.remove()
                var congrats = document.createElement('p')
                congrats.setAttribute('class', 'final')
                congrats.textContent = `Sua nota no teste foi: ${nota}`
                question.appendChild(congrats)
            }
        }
    }
}
