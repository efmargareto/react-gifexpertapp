import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from '../../components/GifGrid';
import '@testing-library/jest-dom'
import { useFetchGifs } from '../../hooks/useFecthGifs';
jest.mock('../../hooks/useFecthGifs')

describe('Pruebas en componente <GifGrid />', () => {
    
    const category = 'Wow'

    test('Debe hacer match con el snapShot ', () => {

        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        })

        const wrapper = shallow( <GifGrid category = { category } /> )

        expect( wrapper ).toMatchSnapshot()
    })

    test('Debe de mostrar items cuando se cargan imagenes', () => {

        const gifs = [{
            id: 'Anguel',
            url: 'https//localhost/img/anguel.jpg',
            title: 'Titulo'
        }] 

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        })
        
        const wrapper = shallow( <GifGrid category = { category } /> )

        expect( wrapper ).toMatchSnapshot()
        expect( wrapper.find('p').exists() ).toBe(false)
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length )
    })
    
})
