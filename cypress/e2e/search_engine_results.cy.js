describe('First test suite', () => {
  before(function () {
    cy.fixture('search_engines').then((searchEngine) => {
      this.searchEngine = searchEngine
    })
  })
  it('Test First Item in the Search Result is expected', function () {
    cy.visit(this.searchEngine.searchEngineUrl)
    cy.get(this.searchEngine.searchInputSelector)
      .type(this.searchEngine.searchTerm)
    cy.get(this.searchEngine.searchResultsSelector)
      .eq(this.searchEngine.searchResultsIndex)
      .should('have.text', this.searchEngine.expectedText)
  })
})