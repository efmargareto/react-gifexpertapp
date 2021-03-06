import { useFetchGifs } from '../../hooks/useFecthGifs';
import { renderHook } from '@testing-library/react-hooks'

describe('Pruebas en el hook useFecthGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Wow' ) )
        const { data, loading } = result.current

        await waitForNextUpdate()

        expect( data ).toEqual([])
        expect( loading ).toBe(true)
    })

    test('Debe de retornar un [] de imgs y loading en false', async() => {

        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'Wow' ) )

        await waitForNextUpdate()

        const { data, loading } = result.current

        expect( data.length ).toBe(6)
        expect( loading ).toBe(false)
    })
    
})
