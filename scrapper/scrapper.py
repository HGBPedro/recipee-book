import scrapy

class QuotesSpider(scrapy.Spider):
    name = 'quotes'
    start_urls = [
        'https://www.allrecipes.com/recipe/35151/traditional-filipino-lumpia/'
    ]

    def parse(self, response):
        for quote in response.css('li.comp'):
            yield {
                'text': quote.css('p::text').get(),
            }

        next_page = response.css('li.next a::attr("href")').get()
        if next_page is not None:
            yield response.follow(next_page, self.parse)