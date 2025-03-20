import{test,expect,Locator,Page, chromium, Browser, BrowserContext}from "@playwright/test"
test("This test case is using browser context",async({},testInfo)=>{
   const browser:Browser=await chromium.launch()
  const browsercontext:BrowserContext= await browser.newContext({viewport:{width:400,height:400}})
  const page:Page=await browsercontext.newPage()
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.waitForTimeout(10000)
  const screeshotpath= await page.screenshot({path:"TakeSnapshots/BrowserContext_LoginSnapshot.png",fullPage:true})
  
  testInfo.attach("BrowserContext_LoginpageSnapshot",{
      contentType:'image/png',
      body:screeshotpath
  })
})
test("This test case is recording video using browser context",async({},testInfo)=>{
    const browser:Browser=await chromium.launch()
   const browsercontext:BrowserContext= await browser.newContext({viewport:{width:800,height:800},
    recordVideo: { dir: 'test-results/videos', size: { width: 800, height: 600 } }},
   )
   const page:Page=await browsercontext.newPage()
   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
   await page.waitForTimeout(10000)
   const screeshotpath= await page.screenshot({path:"TakeSnapshots/BrowserContext_LoginSnapshot.png",fullPage:true})
   
   testInfo.attach("BrowserContext_LoginpageSnapshot",{
       contentType:'image/png',
       body:screeshotpath
   })
   await browsercontext.close()
   const videoPath = await page.video()?.path();
   if(videoPath)
   {
    testInfo.attach("Video attached",
    {
       path:videoPath,
       contentType:"video/webm"
    })
   }

  await browser.close()
 })
test("This test case is using page fixture",async({page},testInfo)=>{
    await page.setViewportSize({width:1200,height:200})
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(10000)
    const screeshotpath= await page.screenshot({path:"TakeSnapshots/TestFixture_LoginSnapshot.png",fullPage:true})
  
    testInfo.attach("PageFixture_LoginpageSnapshot",{
        contentType:'image/png',
        body:screeshotpath
    })
    
})
test("This test case is using page fixture video1",async({page},testInfo)=>{
    await page.setViewportSize({width:1200,height:200})
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(10000)
    const screeshotpath= await page.screenshot({path:"TakeSnapshots/TestFixture_LoginSnapshot.png",fullPage:true})
  
    testInfo.attach("PageFixture_LoginpageSnapshot",{
        contentType:'image/png',
        body:screeshotpath

    })
const videoPath1 = await page.video()?.path();
if(videoPath1)
{
 testInfo.attach("Video attached",
 {
    path:videoPath1,
    contentType:"video/webm"
 })
}



})
