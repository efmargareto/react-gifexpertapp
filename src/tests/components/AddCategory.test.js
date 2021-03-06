import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"
import React from 'react'
import '@testing-library/jest-dom'

describe('Pruebas componente AddCategory', () => {

    const setCategorias = jest.fn();
    let wrapper = shallow( <AddCategory setCategorias={ setCategorias } /> )

    beforeEach( () => {
        jest.clearAllMocks()
        wrapper = shallow( <AddCategory setCategorias={ setCategorias } /> )
    })

    test('Debe mostrarse correctamente ', () => {
    
        expect( wrapper ).toMatchSnapshot()
    })

    test('No debe de añadir la información con submit', () => {

        wrapper.find('form').simulate('submit', { preventDefault(){} })

        expect( setCategorias ).not.toHaveBeenCalled();
    })

    test('Debe de llamar el setCategories y limpiar la caja de text', () => {
 
        const value = 'anguel'
        
        // 1. Simular input Change
        wrapper.find('input').simulate('change', { target: { value } })
        
        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { preventDefault(){} })
        
        // 3. SetCategorias se debe haber llamado
        // expect( setCategorias ).toHaveBeenCalledTimes( 2 )
        expect( setCategorias ).toHaveBeenCalled()
        
        // 4. El valor del input debe de estar vacio ''
        expect( wrapper.find('input').prop('value')).toBe('')
    })
    
})
