from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:3000")

        # Scroll to the Student Leadership section
        leadership_section = page.locator("#student-leadership")
        leadership_section.scroll_into_view_if_needed()

        # Wait for the images to load
        page.wait_for_timeout(2000)

        page.screenshot(path="jules-scratch/verification/verification.png")
        browser.close()

if __name__ == "__main__":
    run()
