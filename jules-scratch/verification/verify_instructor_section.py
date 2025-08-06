from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch()
    page = browser.new_page()
    page.goto("http://localhost:3000")

    # Wait for the instructor section to be visible
    instructor_section = page.locator("#instructor")
    instructor_section.wait_for(state="visible")

    # Take a screenshot of the instructor section
    instructor_section.screenshot(path="jules-scratch/verification/verification.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
