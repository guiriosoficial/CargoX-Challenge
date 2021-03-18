import { shallowMount } from '@vue/test-utils'
import Timeline from '@/components/Timeline'
import { dateTime } from '@/filters'


describe('Timeline', () => {
  const wrapper = shallowMount(Timeline, {
    props: { 
      timeline: [
        { label: 'Step done', time: dateTime(1551124241) },
        { label: 'Step done second', time: dateTime(1551124241) },
        { label: 'Step doing', time: null },
        { label: 'Step todo', time: null },
      ]
    }
  })

  const recived = wrapper.findAll('.timeline-container__step')

  test('Should be render', () => {
    expect(wrapper.exists()).toBeTruthy()
  })


  test('Should be render', () => {
  })

  test('Should be visible', () => {
    expect(recived[0].isVisible()).toBeTruthy()
    expect(recived[1].isVisible()).toBeTruthy()
    expect(recived[2].isVisible()).toBeTruthy()
    expect(recived[3].isVisible()).toBeTruthy()
  })

  test('Should be have props value', () => {
    const titlesRecived = wrapper.findAll('.timeline-container__step-title')
    const contentsRecived = wrapper.findAll('.timeline-container__step-time')

    expect(titlesRecived[0].text()).toBe('Step done')
    expect(titlesRecived[1].text()).toBe('Step done second')
    expect(titlesRecived[2].text()).toBe('Step doing')
    expect(titlesRecived[3].text()).toBe('Step todo')

    expect(contentsRecived[0].text()).toBe('18/01/1970 19:52')
    expect(contentsRecived[1].text()).toBe('18/01/1970 19:52')
    expect(contentsRecived[2].text()).toBe('')
    expect(contentsRecived[3].text()).toBe('')
  })

  test('Dots should be colors', () => {
    const dotsRecived = wrapper.findAll('.timeline-container__progress-dot')
    const linesRecived = wrapper.findAll('.timeline-container__progress-line')

    expect(dotsRecived[0].classes()).toContain('timeline-container__progress-dot--done')
    expect(dotsRecived[1].classes()).toContain('timeline-container__progress-dot--done')
    expect(dotsRecived[2].classes()).toContain('timeline-container__progress-dot--doing')
    expect(dotsRecived[3].classes()).not.toContain('timeline-container__progress-dot--done')
    expect(dotsRecived[3].classes()).not.toContain('timeline-container__progress-dot--doing')

    expect(linesRecived[0].classes()).toContain('timeline-container__progress-line--done')
    expect(linesRecived[1].classes()).toContain('timeline-container__progress-line--doing')
    expect(linesRecived[2].classes()).not.toContain('timeline-container__progress-line--done')
    expect(linesRecived[2].classes()).not.toContain('timeline-container__progress-line--doing')
    expect(linesRecived[3].classes()).not.toContain('timeline-container__progress-line--done')
    expect(linesRecived[3].classes()).not.toContain('timeline-container__progress-line--doing')
  })
})