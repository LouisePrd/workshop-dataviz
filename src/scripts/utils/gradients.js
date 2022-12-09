/**
 * Gradients
 */

import {
  overlay,
  overlayTitle,
  overlayWrapper,
  overlayDetails,
  backBtn,
  canvas,
} from './dom'
import { getRandomIntFromInterval } from './helpers'
import paper, { view } from 'paper'
import gsap from 'gsap'

export let tabGradients = []

let tl

let mouseX = 0
let mouseY = 0

export function createGradients(data) {
  // view.pause()
  // paper.projects[0].remove()
  // console.log(paper.projects)

  gsap.defaults({
    ease: 'power4.out',
    force3D: false,
  })

  tl = gsap.timeline()
  tl.fromTo(
    overlayTitle,
    { x: '-50%', y: '-30%', fontSize: '10rem', opacity: 0, top: '50%' },
    { duration: 1, delay: 1, x: '-50%', y: '-50%', opacity: 1, top: '50%' }
  )
  tl.to(overlayTitle, {
    x: '-50%',
    y: '0%',
    fontSize: '3rem',
    opacity: 1,
    top: '2rem',
    duration: 2,
  })
  tl.to(overlayWrapper, {
    opacity: 1,
    duration: 3,
  })

  let idNegative = 0
  let mood
  let rate
  let rateSize
  let age

  /* Child */

  let positiveDataChild = data.moods.child.positive
  let negativeDataChild = data.moods.child.negative
  let sizeMoodList =
    Object.keys(positiveDataChild).length +
    Object.keys(negativeDataChild).length

  for (let i = 0; i < sizeMoodList; i++) {
    if (i < sizeMoodList / 2) {
      mood = Object.keys(positiveDataChild)[i]
      rate = Object.values(positiveDataChild)[i]
    } else {
      mood = Object.keys(negativeDataChild)[idNegative]
      rate = Object.values(negativeDataChild)[idNegative]
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(0, 19)
    age = 'child'

    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`, 'moodWrapper')

    wrapperDiv.style.width = rateSize + 'px'
    wrapperDiv.style.height = rateSize + 'px'
    wrapperDiv.style.position = 'absolute'
    wrapperDiv.style.top = `${randTop}%`
    wrapperDiv.style.left = `${randLeft}%`

    wrapperDiv.appendChild(divGradient1)
    wrapperDiv.appendChild(divGradient2)

    tabGradients.push(wrapperDiv)
  }

  /* Teen */

  let positiveDataTeen = data.moods.teen.positive
  let negativeDataTeen = data.moods.teen.negative

  idNegative = 0

  for (let i = 0; i < sizeMoodList; i++) {
    if (i < sizeMoodList / 2) {
      mood = Object.keys(positiveDataTeen)[i]
      rate = Object.values(positiveDataTeen)[i]
    } else {
      mood = Object.keys(negativeDataTeen)[idNegative]
      rate = Object.values(negativeDataTeen)[idNegative]
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(27, 46)

    age = 'teen'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`, 'moodWrapper')

    wrapperDiv.style.width = rateSize + 'px'
    wrapperDiv.style.height = rateSize + 'px'
    wrapperDiv.style.position = 'absolute'
    wrapperDiv.style.top = `${randTop}%`
    wrapperDiv.style.left = `${randLeft}%`

    wrapperDiv.appendChild(divGradient1)
    wrapperDiv.appendChild(divGradient2)

    tabGradients.push(wrapperDiv)
  }

  /* Young adult */

  let positiveDataYa = data.moods.ya.positive
  let negativeDataYa = data.moods.ya.negative

  idNegative = 0

  for (let i = 0; i < sizeMoodList; i++) {
    if (i < sizeMoodList / 2) {
      mood = Object.keys(positiveDataYa)[i]
      rate = Object.values(positiveDataYa)[i]
    } else {
      mood = Object.keys(negativeDataYa)[idNegative]
      rate = Object.values(negativeDataYa)[idNegative]
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(54, 73)

    age = 'ya'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`, 'moodWrapper')

    wrapperDiv.style.width = rateSize + 'px'
    wrapperDiv.style.height = rateSize + 'px'
    wrapperDiv.style.position = 'absolute'
    wrapperDiv.style.top = `${randTop}%`
    wrapperDiv.style.left = `${randLeft}%`

    wrapperDiv.appendChild(divGradient1)
    wrapperDiv.appendChild(divGradient2)

    tabGradients.push(wrapperDiv)
  }

  /* Adult */

  let positiveDataAdult = data.moods.adult.positive
  let negativeDataAdult = data.moods.adult.negative

  idNegative = 0

  for (let i = 0; i < sizeMoodList; i++) {
    if (i < sizeMoodList / 2) {
      mood = Object.keys(positiveDataAdult)[i]
      rate = Object.values(positiveDataAdult)[i]
    } else {
      mood = Object.keys(negativeDataAdult)[idNegative]
      rate = Object.values(negativeDataAdult)[idNegative]
      idNegative++
    }

    const divGradient1 = document.createElement('div')
    const divGradient2 = document.createElement('div')

    divGradient1.classList.add(mood, 'div1', 'mainDiv')
    divGradient2.classList.add(mood, 'div2', 'mainDiv')

    rateSize = rate * 50

    const randTop = getRandomIntFromInterval(10, 90)
    const randLeft = getRandomIntFromInterval(81, 100)

    age = 'adult'
    const wrapperDiv = document.createElement('div')
    wrapperDiv.classList.add(`${age}${mood}`, 'moodWrapper')

    wrapperDiv.style.width = rateSize + 'px'
    wrapperDiv.style.height = rateSize + 'px'
    wrapperDiv.style.position = 'absolute'
    wrapperDiv.style.top = `${randTop}%`
    wrapperDiv.style.left = `${randLeft}%`

    wrapperDiv.appendChild(divGradient1)
    wrapperDiv.appendChild(divGradient2)

    tabGradients.push(wrapperDiv)
  }

  tabGradients.forEach((child, i) => {
    overlayWrapper.appendChild(tabGradients[i])

    // Handle hover
    child.addEventListener('mouseover', (event) => {
      const name = tabGradients[i].classList[0].replace(
        /child|teen|ya|adult/,
        ''
      )
      overlayDetails.innerHTML = name
      overlayDetails.classList.add('visible')

      mouseX = event.clientX
      mouseY = event.clientY

      overlayDetails.style.top = `${mouseY - 50}px`
      overlayDetails.style.left = `${mouseX}px`
    })

    child.addEventListener('mouseout', (event) => {
      overlayDetails.classList.remove('visible')
    })
  })
}

backBtn.addEventListener('click', () => {
  // view.play()

  gsap.set(overlayTitle, { clearProps: 'all' })
  gsap.set(overlayWrapper, { clearProps: 'all' })
  tl.kill()

  overlay.classList.remove('visible')

  for (let i = 0; i < tabGradients.length; i++) {
    overlayWrapper.removeChild(tabGradients[i])
  }

  tabGradients = []
})
