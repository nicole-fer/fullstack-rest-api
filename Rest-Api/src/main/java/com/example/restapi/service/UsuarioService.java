package com.example.restapi.service;

import com.example.restapi.model.Usuario;

import java.util.List;

public interface UsuarioService {

    public Usuario salvarUsuario(Usuario usuario);
    public List<Usuario> getAllUsuarios();

   // public List<Usuario> get(Integer id);

    //public void delete(Integer id);
    public Usuario get(Integer id);

    public void delete(Integer id);
}
