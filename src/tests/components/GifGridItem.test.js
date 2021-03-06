import '@testing-library/jest-dom'
import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe( 'Testeando Componente <GifGridItem />', () => {
    
    const title = 'Baloncesto'
    const url = 'https://localhost.com/img/baloncesto.jpg'
    const wrapper = shallow( <GifGridItem title={ title } url= { url } /> )

    test('Debe de mostrar el componente correctamente', () => {

        expect( wrapper ).toMatchSnapshot();
    })

    test('Debe de tener un parrafo con el titulo', () => {
        
        const p = wrapper.find('p')
        expect( p.text().trim() ).toBe( title )
    })

    test('Debe de tener la imagen igual al url y alt de los prop', () => {

        const img = wrapper.find('img').props()
        const { src, alt } = img

        expect( src ).toBe( url )
        expect( alt ).toBe( title )
    })

    test('Debet ener las clases de la animacion, animate__fadeInUp', () => {

        const div = wrapper.find('div').props()
        const { className } = div

        expect( className ).toContain('animate__fadeInUp')
    })
    
}) 