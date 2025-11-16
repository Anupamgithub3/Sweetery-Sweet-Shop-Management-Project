def test_get_sweets(client):
    response = client.get("/api/sweets")
    assert response.status_code == 200
    assert isinstance(response.json(), list)


def test_search_sweets(client):
    response = client.get("/api/sweets/search?name=gulab")
    assert response.status_code == 200
