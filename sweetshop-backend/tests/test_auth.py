def test_register_user(client):
    response = client.post("/api/auth/register", json={
        "email": "test@example.com",
        "password": "test123",
        "is_admin": False
    })

    assert response.status_code == 200
    data = response.json()
    assert data["email"] == "test@example.com"


def test_login(client):
    response = client.post(
        "/api/auth/login",
        data={"username": "test@example.com", "password": "test123"}
    )

    assert response.status_code == 200
    assert "access_token" in response.json()
