import { Selector } from 'testcafe';
    
fixture('testcafe-demo-app-tests')
    .page `http://localhost:3000`;


test('header is available', async t => {
    
    const header = Selector(`[data-testid='header']`);
    const headerExists = header.exists;

    
    await t
        .wait(5000)
        .expect(headerExists).ok()
    
});