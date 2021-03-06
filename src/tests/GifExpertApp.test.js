import { shallow } from 'enzyme'
import React from 'react'
import GifExpertApp from '../GifExpertApp'


describe('Pruebas componente <GifExpertApp />', () => {

    test('Debe concordar con el smashShot', () => {
        
        const wrapper = shallow( <GifExpertApp /> )

        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de mostrar un lista de categorias', () => {

        const categories = ['Wow', 'divertido']
        const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('GifGrid').length ).toBe( categories.length )
    })
    
        
})
