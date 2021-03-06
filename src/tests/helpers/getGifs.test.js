import { getGifs } from "../../helpers/getGifs"

describe('Pruebas con getGifs', () => {

    test('Debe de traer 6 elementos', async() => {
        
        const gifs = await getGifs('Wow')

        expect( gifs.length ).toBe( 6 )
    })

    test('Debe de traer 6 elementos', async() => {
        
        const gifs = await getGifs('')

        expect( gifs.length).toBe( 0 )
    })
    
})
