package com.example.restapi.service;

import com.example.restapi.model.Usuario;
import com.example.restapi.repositorio.UsuarioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioServImp implements UsuarioService{

    @Autowired
    private UsuarioRepo usuarioRepo;

    @Override
    public Usuario salvarUsuario(Usuario usuario) {
        return usuarioRepo.save(usuario);
    }

    @Override
    public List<Usuario> getAllUsuarios() {
        return usuarioRepo.findAll();
    }

    public Usuario get(Integer id){
        return usuarioRepo.findById(id).get();
    }

    public void delete(Integer id){
        usuarioRepo.deleteById(id);
    }

}
